import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { getHtmlforCountry } from "../../utils"

export const SelfMonitor = (
  dispatch,
  index,
  items,
  symptoms,
  country = "trinidad"
) => {
  const data = useStaticQuery(GetData)

  const info = getHtmlforCountry(data.allMdx.edges, country)

  return (
    <div key="SelfMoniror" className="card">
      <div className="card__info">
        <MDXRenderer>{info.node.body}</MDXRenderer>
      </div>
    </div>
  )
}

const GetData = graphql`
  query {
    allMdx(filter: { frontmatter: { name: { regex: "/selfMonitor/" } } }) {
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
