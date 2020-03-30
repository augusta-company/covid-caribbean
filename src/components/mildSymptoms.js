import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Button } from "./button"
import { getHtmlforCountry } from "../utils"

export const MildSymptomps = (
  dispatch,
  index,
  items,
  symptoms,
  country = "trinidad"
) => {
  const data = useStaticQuery(GetData)

  const info = getHtmlforCountry(data.allMdx.edges, country)

  return (
    <div key="mildSymptomps" className="card">
      <div className="card__info">
        <MDXRenderer>{info.node.body}</MDXRenderer>
      </div>
      <div className="btn_container">
        <Button
          selected={items[index]?.flag === "LightSymptomps"}
          onClick={() => dispatch({ type: "LightSymptomps", index })}
        >
          No
        </Button>
        <Button
          selected={items[index]?.flag === "MediumWarning"}
          onClick={() => dispatch({ type: "MediumWarning", index })}
        >
          Yes
        </Button>
      </div>
    </div>
  )
}

const GetData = graphql`
  query {
    allMdx(filter: { frontmatter: { name: { regex: "/mildSymptoms/" } } }) {
      edges {
        node {
          body
          frontmatter {
            type
            name
            country
          }
        }
      }
    }
  }
`
