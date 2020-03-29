import React, { useReducer } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { CountryPicker } from "../components/countryPicker"
import { EntryQuestion } from "../components/entryQuestion"
import reducer from "../reducer"
import "../styles.css"

const initalState = { items: [], symptoms: false }

export default function Template({ data, pageContext }) {
  const { mdx: info } = data
  const [state, dispatch] = useReducer(reducer, initalState)

  return (
    <Layout>
      <SEO title="Home" />
      <CountryPicker />
      <MDXRenderer title={pageContext.frontmatter.title}>
        {info.body}
      </MDXRenderer>
      <div className="questionnaire">
        {EntryQuestion(
          dispatch,
          0,
          state.items,
          state.symptom,
          info.frontmatter.country
        )}
        {state.items.map((item, index) =>
          item.cmp(
            dispatch,
            index + 1,
            state.items,
            state.symptoms,
            info.frontmatter.country
          )
        )}
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query Intro($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        country
      }
    }
  }
`
