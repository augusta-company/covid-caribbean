import React, { useReducer } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "../components/button"
import CoatWithName from "../svgs/coat.svg"
import Augusta from "../svgs/power-augusta.svg"
import reducer from "../reducer"
import "../styles.css"

const initalState = { items: [], symptoms: false }

const query = graphql`
  query {
    currentBuildDate {
      currentDate
    }
  }
`

const IndexPage = () => {
  const [state, dispatch] = useReducer(reducer, initalState)
  const data = useStaticQuery(query)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="coat-container">
        <CoatWithName />
      </div>
      <h1 className="title">
        Trinidad and Tobago COVID-19 Symptom Self-Assessment Tool
      </h1>
      <a
        href="https://augusta-health.webflow.io/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: `60px 0` }}
      >
        <div>
          <Augusta></Augusta>
        </div>
      </a>
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

        <p>Last updated: {data.currentBuildDate.currentDate}</p>
        <p>
          Anyone who has symptoms - including a fever, cough, sneezing, or sore
          throat - should 
          <a
            href="http://www.health.gov.tt/images_cms/2020/CoronaVirus/Posters/Quarantine01.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            self-isolate
          </a>{" "}
          for 10 days. Continue to complete this assessment to determine if you
          may need care.
        </p>
        <div className="card">
          <div className="card__info">
            <p>
              For questions of concerns, the Trinidad and Tobago Ministry of
              Health has a COVID-19 Hotline: 877-WELL, social media (
              <a
                href="https://www.facebook.com/MinistryofHealthTT/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              ,{" "}
              <a
                href="https://twitter.com/MOH_TT"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              ,{" "}
              <a
                href="https://www.health.gov.tt/sitepages/default.aspx?id=292"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
              )
            </p>

            <p>
              For the most up to date non-medical information, including
              confirmed cases, travel restrictions, news, and updates you can
              visit{" "}
              <a
                href="http://www.health.gov.tt/sitepages/default.aspx?id=292"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trinidad and Tobago’s COVID-19 Support and Information
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="questionnaire">
        <div className="card">
          <div className="card__info">
            <p>Are you experiencing any of the following:</p>
            <ul>
              <li>
                Severe difficulty breathing (e.g. struggling to breathe or
                speaking in single words)
              </li>
              <li>Severe chest pain</li>
              <li>Having a very hard time waking up</li>
              <li>Feeling confused</li>
              <li>Losing consciousness</li>
            </ul>
          </div>
          <div className="btn_container">
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
          item.cmp(dispatch, index + 1, state.items, state.symptoms)
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
