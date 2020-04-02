import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { getHtmlforCountry } from "../../utils"

export const Isolate14Warning = (
  dispatch,
  index,
  items,
  symptoms,
  country = "trinidad-and-tobago"
) => {
  const data = useStaticQuery(GetData)

  const info = getHtmlforCountry(data.allMdx.edges, country)

  return (
    <div key="isolate14" className="card">
      <div className="card__info">
        <MDXRenderer>{info.node.body}</MDXRenderer>
      </div>
    </div>
  )
}

const GetData = graphql`
  query {
    allMdx(filter: { frontmatter: { name: { regex: "/isolate14Warning/" } } }) {
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
