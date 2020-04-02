import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { getHtmlforCountry } from "../utils"
import { Button } from "./button"

export const TravelOutside = (
  dispatch,
  index,
  items,
  symptoms,
  country = "trinidad-and-tobago"
) => {
  const data = useStaticQuery(GetData)

  const info = getHtmlforCountry(data.allMdx.edges, country)
  return (
    <div key="travelOutside" className="card">
      <div className="card__info">
        <MDXRenderer>{info.node.body}</MDXRenderer>
      </div>

      <div className="btn_container">
        <Button
          selected={items[index]?.flag === "ProvideCare"}
          onClick={() =>
            dispatch({
              type: "ProvideCare",
              index,
            })
          }
        >
          No
        </Button>
        <Button
          selected={items[index]?.flag === "Isolate14Warning"}
          onClick={() => dispatch({ type: "Isolate14Warning", index })}
        >
          Yes
        </Button>
      </div>
    </div>
  )
}

const GetData = graphql`
  query {
    allMdx(filter: { frontmatter: { name: { regex: "/travelOutside/" } } }) {
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
