import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Button } from "./button"
import { getHtmlforCountry } from "../utils"

export const LightSymptomps = (
  dispatch,
  index,
  items,
  symptoms,
  country = "trinidad"
) => {
  const data = useStaticQuery(GetData)

  const info = getHtmlforCountry(data.allMdx.edges, country)

  return (
    <div key="lightSymptomps" className="card">
      <div className="card__info">
        <MDXRenderer>{info.node.body}</MDXRenderer>
      </div>
      <div className="btn_container">
        <Button
          selected={items[index]?.flag === "TravelOutside"}
          onClick={() => dispatch({ type: "TravelOutside", index })}
        >
          No
        </Button>
        <Button
          selected={items[index]?.flag === "LightWarning"}
          onClick={() => dispatch({ type: "LightWarning", index })}
        >
          Yes
        </Button>
      </div>
    </div>
  )
}

const GetData = graphql`
  query {
    allMdx(filter: { frontmatter: { name: { regex: "/lightSymptoms/" } } }) {
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
