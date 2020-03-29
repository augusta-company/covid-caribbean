import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { getHtmlforCountry } from "../utils"
import { Button } from "./button"

export const MentalHealth = (
  dispatch,
  index,
  items,
  symptoms,
  country = "trinidad"
) => {
  const data = useStaticQuery(GetData)

  const info = getHtmlforCountry(data.allMdx.edges, country)
  return (
    <div key="mentalHealth" className="card">
      <div className="card__info">
        <MDXRenderer>{info.node.body}</MDXRenderer>
      </div>

      <div className="btn_container">
        <Button
          selected={
            items[index]?.flag === "Isolate10Warning-no" ||
            items[index]?.flag === "NoSymptoms"
          }
          onClick={() => {
            if (symptoms) {
              dispatch({ type: "Isolate10Warning-no", index })
            } else {
              dispatch({ type: "NoSymptoms", index })
            }
          }}
        >
          No
        </Button>
        <Button
          selected={
            items[index]?.flag === "Isolate10Warning-yes" ||
            items[index]?.flag === "MentalWarning"
          }
          onClick={() => {
            if (symptoms) {
              dispatch({ type: "Isolate10Warning-yes", index })
            } else {
              dispatch({ type: "MentalWarning", index })
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
    allMdx(filter: { frontmatter: { name: { regex: "/mentalHealth/" } } }) {
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
