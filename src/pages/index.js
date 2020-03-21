import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2 style={{ textAlign: `center` }}>
      Don't overwhelm the Health system unnecessarily.
    </h2>

    <h3>How does it work ?</h3>

    <p>
      On the bottom right corner of the screen you will se a button that will
      trigger a chat with our bot. Answer yes or no to its question to see if
      you need to get tested.
    </p>

    <script type="text/javascript">
      {(function(d, m) {
        var kommunicateSettings = {
          appId: "39fd4adf1615bc0a0ec2a4bc20738caac",
          popupWidget: true,
          automaticChatOpenOnNavigation: true,
        }
        var s = document.createElement("script")
        s.type = "text/javascript"
        s.async = true
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app"
        var h = document.getElementsByTagName("head")[0]
        h.appendChild(s)
        window.kommunicate = m
        m._globals = kommunicateSettings
      })(document, window.kommunicate || {})}
    </script>
  </Layout>
)

export default IndexPage
