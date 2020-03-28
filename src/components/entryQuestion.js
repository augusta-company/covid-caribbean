import React from "react"
import { useStaticQuery } from "gatsby"
import { Button } from "./button"
import { getHtmlforCountry } from "../utils"

export const EntryQuestion = (
  dispatch,
  index,
  items,
  symptoms,
  country = "trinidad"
) => {
  const data = useStaticQuery(GetData)

  const info = getHtmlforCountry(data.allMarkdownRemark.edges, country)

  return (
    <div key="entryQuestion" className="card">
      <div
        className="card__info"
        dangerouslySetInnerHTML={{ __html: info.node.html }}
      />
      <div className="btn_container">
        <Button
          selected={items[0]?.flag === "MildSymptomps"}
          onClick={() => dispatch({ type: "MildSymptomps", index: 0 })}
        >
          No
        </Button>
        <Button
          selected={items[0]?.flag === "UrgentWarning"}
          onClick={() => dispatch({ type: "UrgentWarning", index: 0 })}
        >
          Yes
        </Button>
      </div>
    </div>
  )
}

const GetData = graphql`
  query GetInfo {
    allMarkdownRemark(
      filter: { frontmatter: { name: { regex: "/entryQuestion/" } } }
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
