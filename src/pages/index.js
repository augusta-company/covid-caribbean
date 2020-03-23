import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Chat from "../components/chat"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Chat />
  </Layout>
)

export default IndexPage
