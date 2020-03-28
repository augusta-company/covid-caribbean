import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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

  const info = getHtmlforCountry(data.allMarkdownRemark.edges, country)

  return (
    <div key="lightSymptomps" className="card">
      <div
        className="card__info"
        dangerouslySetInnerHTML={{ __html: info.node.html }}
      />
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
    allMarkdownRemark(
      filter: { frontmatter: { name: { regex: "/lightSymptoms/" } } }
    ) {
      edges {
        node {
          html
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
