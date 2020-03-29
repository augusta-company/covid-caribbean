import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { getHtmlforCountry } from "../../utils"

export const LightWarning = (
  dispatch,
  index,
  items,
  symptoms,
  country = "trinindad"
) => {
  const data = useStaticQuery(GetData)

  const info = getHtmlforCountry(data.allMdx.edges, country)

  return (
    <div key="lightWarning">
      <MDXRenderer items={items} index={index} dispatch={dispatch}>
        {info.node.body}
      </MDXRenderer>
    </div>
  )
}
const GetData = graphql`
  query {
    allMdx(filter: { frontmatter: { name: { regex: "/lightWarning/" } } }) {
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
