import React, { useReducer } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "../components/button"
import { LightSymptomps } from "../components/lightSymptoms"
import { MildSymptomps } from "../components/mildSymptoms"
import { ProvideCare } from "../components/provideCare"
import {
  UrgentWarning,
  MediumWarning,
  LightWarning,
  Isolate10Warning,
} from "../components/warnings"
import CoatWithName from "../svgs/coat-with-name.svg"
import "../styles.css"

const replaceItems = (array, index, obj) => {
  return [...array.slice(0, index), obj]
}

const initalState = { items: [] }

function reducer(state, action) {
  switch (action.type) {
    case "UrgentWarning":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: UrgentWarning,
        }),
      }
    case "MediumWarning":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: MediumWarning,
        }),
      }
    case "LightWarning":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: LightWarning,
        }),
      }
    case "MildSymptomps":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: MildSymptomps,
        }),
      }
    case "LightSymptomps":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: LightSymptomps,
        }),
      }
    case "ProvideCare":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: ProvideCare,
        }),
      }
    case "Isolate10Warning":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: Isolate10Warning,
        }),
      }
    default:
      return { items: replaceItems([...state.items]) }
  }
}

const query = graphql`
  query {
    augusta: file(relativePath: { eq: "augusta-health.png" }) {
      childImageSharp {
        fixed(width: 120, height: 22) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const IndexPage = () => {
  const [state, dispatch] = useReducer(reducer, initalState)
  const image = useStaticQuery(query)

  return (
    <Layout>
      <SEO title="Home" />

      <CoatWithName />
      <h1>Trinidad and Tobago COVID-19 Symptom Self-Assessment Tool</h1>
      <h2 style={{ display: "flex", alignItems: "center" }}>
        Powered by{" "}
        <Img
          fixed={image.augusta.childImageSharp.fixed}
          alt="Augusta Health"
          style={{ marginLeft: "8px" }}
        ></Img>
      </h2>
      <div>
        <p>
          This self-assessment tool will help determine whether you may need
          further assessment or testing for COVID-19. You can complete this
          assessment for yourself, or on behalf of someone else.
        </p>
        <p>
          If you have respiratory symptoms and a serious ongoing condition, or
          are in the third trimester of pregnancy, please follow the advice of
          your specialist.
        </p>
        <p>
          Most people do not need to be tested for COVID-19 because it will not
          change your care.
        </p>
        <p>People who do not need to be tested for COVID-19 include:</p>
        <ul>
          <li>People without symptoms</li>
          <li>
            People who have mild respiratory symptoms that can be managed at
            home
          </li>
          <li>Returning travellers</li>
        </ul>
        <p>Who should be tested for COVID-19?</p>
        <p>
          People with respiratory symptoms who may require testing for COVID-19
          include people who are:
        </p>
        <ul>
          <li>Hospitalized, or likely to be hospitalized</li>
          <li>Health Care Workers</li>
          <li>Residents of long-term care facilities</li>
          <li>Part of an investigation of a cluster or outbreak</li>
        </ul>

        <p>
          Anyone who has symptoms - including a fever, cough, sneezing, or sore
          throat - should 
          <a
            href="http://www.health.gov.tt/images_cms/2020/CoronaVirus/Posters/Quarantine01.jpg"
            target="_blank"
          >
            self-isolate
          </a>{" "}
          for 10 days. Continue to complete this assessment to determine if you
          may need care.
        </p>

        <p>
          For questions of concerns, the Trinidad and Tobago Ministry of Health
          has a COVID-19 Hotline: 877-WELL, social media (
          <a
            href="https://www.facebook.com/MinistryofHealthTT/"
            target="_blank"
          >
            Facebook
          </a>
          ,{" "}
          <a href="https://twitter.com/MOH_TT" target="_blank">
            Twitter
          </a>
          ,{" "}
          <a
            href="https://www.health.gov.tt/sitepages/default.aspx?id=292"
            target="_blank"
          >
            Website
          </a>
          )
        </p>

        <p>
          For the most up to date non-medical information, including confirmed
          cases, travel restrictions, news, and updates you can visit{" "}
          <a
            href="http://www.health.gov.tt/sitepages/default.aspx?id=292"
            target="_blank"
          >
            Trinidad and Tobago’s COVID-19 Support and Information
          </a>
          .
        </p>
      </div>
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
          <Button
            selected={state.items[0]?.flag === "MildSymptomps"}
            onClick={() => dispatch({ type: "MildSymptomps", index: 0 })}
          >
            No
          </Button>
          <Button
            selected={state.items[0]?.flag === "UrgentWarning"}
            onClick={() => dispatch({ type: "UrgentWarning", index: 0 })}
          >
            Yes
          </Button>
        </div>
      </div>
      {state.items.map((item, index) =>
        item.cmp(dispatch, index + 1, state.items)
      )}
      <p>
        For Global News The World Health Organization has created a phone
        service to provide non-medical information about COVID-19. Information
        is available via text message or Whatsapp or at +41 79 893 18 92.
      </p>
    </Layout>
  )
}

export default IndexPage
