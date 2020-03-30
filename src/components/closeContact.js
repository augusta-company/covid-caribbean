import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { getHtmlforCountry } from "../utils"
import { Button } from "./button"

export const CloseContact = (
  dispatch,
  index,
  items,
  symptoms,
  country = "trinindad"
) => {
  const data = useStaticQuery(GetData)

  const info = getHtmlforCountry(data.allMdx.edges, country)

  return (
    <div key="closeContact" className="card">
      <div className="card__info">
        <MDXRenderer>{info.node.body}</MDXRenderer>
      </div>

      <div className="btn_container">
        <Button
          selected={
            items[index]?.flag === "MentalHealth" ||
            items[index]?.flag === "NoSymptoms"
          }
          onClick={() => {
            if (symptoms) {
              dispatch({ type: "Isolate10Warning-no", index })
            } else {
              dispatch({ type: "MentalHealth", index })
            }
          }}
        >
          No
        </Button>
        <Button
          selected={
            items[index]?.flag === "Isolate10Warning-yes" ||
            items[index]?.flag === "SelfMonitor"
          }
          onClick={() => {
            if (symptoms) {
              dispatch({ type: "Isolate10Warning-yes", index })
            } else {
              dispatch({ type: "SelfMonitor", index })
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
    allMdx(filter: { frontmatter: { name: { regex: "/closeContact/" } } }) {
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
