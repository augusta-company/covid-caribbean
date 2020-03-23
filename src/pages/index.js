import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  UrgentWarning,
  MediumWarning,
  LightWarning,
} from "../components/warnings"

import "../styles.css"

const MildSymptomps = (addItem, index) => (
  <div key="mildSymptomps" className="card">
    <p>Are you experiencing any of the following:</p>
    <ul>
      <li>Shortness of breath at rest</li>
      <li>Inability to lie down because of difficulty breathing</li>
      <li>
        Chronic health conditions that you are having difficulty managing
        because of difficulty breathing
      </li>
    </ul>

    <div>
      <button onClick={() => addItem("LightSymptomps", index)}>No</button>
      <button onClick={() => addItem("MediumWarning", index)}>Yes</button>
    </div>
  </div>
)

const LightSymptomps = (addItem, index) => (
  <div key="lightSymptomps" className="card">
    <p>Are you experiencing any of the following:</p>
    <ul>
      <li>Fever</li>
      <li>Cough</li>
      <li>Sneezing</li>
      <li>Sore throat</li>
    </ul>

    <div>
      <button onClick={() => addItem("MildSymptomps", index)}>No</button>
      <button onClick={() => addItem("LightWarning", index)}>Yes</button>
    </div>
  </div>
)

const replaceItems = (array, index, fn) => {
  return [...array.slice(0, index), fn]
}

const IndexPage = () => {
  const [displayItems, setDisplayItems] = useState([])

  const addItem = (action, index) => {
    switch (action) {
      case "UrgentWarning":
        setDisplayItems(replaceItems(displayItems, index, UrgentWarning))
        break
      case "MediumWarning":
        setDisplayItems(replaceItems(displayItems, index, MediumWarning))
        break
      case "LightWarning":
        setDisplayItems(replaceItems(displayItems, index, LightWarning))
        break
      case "MildSymptomps":
        setDisplayItems(replaceItems(displayItems, index, MildSymptomps))
        break
      case "LightSymptomps":
        setDisplayItems(replaceItems(displayItems, index, LightSymptomps))
        break
      default:
        setDisplayItems([...displayItems])
    }
  }
  return (
    <Layout>
      <SEO title="Home" />

      <div className="card">
        <p>Are you experiencing any of the following:</p>
        <ul>
          <li>
            Severe difficulty breathing (e.g. struggling to breathe or speaking
            in single words)
          </li>
          <li>Severe chest pain</li>
          <li>Having a very hard time waking up</li>
          <li>Feeling confused</li>
          <li>Losing consciousness</li>
        </ul>

        <div>
          <button onClick={() => addItem("MildSymptomps", 0)}>No</button>
          <button onClick={() => addItem("UrgentWarning", 0)}>Yes</button>
        </div>
      </div>
      {displayItems.map((item, index) => item(addItem, index + 1))}
    </Layout>
  )
}

export default IndexPage
