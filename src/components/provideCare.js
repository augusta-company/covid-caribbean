import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { getHtmlforCountry } from "../utils"
import { Button } from "./button"

export const ProvideCare = (
  dispatch,
  index,
  items,
  symptoms,
  country = "trinidad-and-tobago"
) => {
  const data = useStaticQuery(GetData)

  const info = getHtmlforCountry(data.allMdx.edges, country)
  return (
    <div key="provideCare" className="card">
      <div className="card__info">
        <MDXRenderer>{info.node.body}</MDXRenderer>
      </div>

      <div className="btn_container">
        <Button
          selected={items[index]?.flag === "CloseContact"}
          onClick={() =>
            dispatch({ type: "CloseContact", index, symptoms: false })
          }
        >
          No
        </Button>
        <Button
          selected={
            items[index]?.flag === "Isolate10Warning" ||
            items[index]?.flag === "Isolate14Warning"
          }
          onClick={() => {
            if (symptoms) {
              dispatch({ type: "Isolate10Warning", index })
            } else {
              dispatch({ type: "Isolate14Warning", index })
            }
          }}
        >
          Yes
        </Button>
      </div>
    </div>
  )
}

const GetData = graphql`
  query {
    allMdx(filter: { frontmatter: { name: { regex: "/provideCare/" } } }) {
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
