import React, { useReducer } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { EntryQuestion } from "../components/entryQuestion"
import CoatWithName from "../svgs/coat.svg"
import Augusta from "../svgs/power-augusta.svg"
import reducer from "../reducer"
import "../styles.css"
import { graphql } from "gatsby"

const initalState = { items: [], symptoms: false }

export default function Template({ data }) {
  const { markdownRemark: info } = data
  const [state, dispatch] = useReducer(reducer, initalState)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="coat-container">
        <CoatWithName />
      </div>
      <h1 className="title">{info.frontmatter.title}</h1>
      <a
        href="https://health.augusta.company/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: `20px 0` }}
      >
        <div>
          <Augusta></Augusta>
        </div>
      </a>
      <div dangerouslySetInnerHTML={{ __html: info.html }} />
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
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        country
      }
    }
  }
`
