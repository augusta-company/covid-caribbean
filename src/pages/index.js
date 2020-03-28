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
        href="https://health.augusta.company/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: `20px 0` }}
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
        <p>
          <strong>
            People who do not need to be tested for COVID-19 include:
          </strong>
        </p>
        <ul>
          <li>People without symptoms</li>
          <li>
            People who have mild respiratory symptoms that can be managed at
            home
          </li>
        </ul>

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
          and immediately contact the listed hotlines. Continue to complete this assessment 
          to determine if you may need care.
        </p>

        <p>Last updated: {data.currentBuildDate.currentDate}</p>
        <div className="card">
          <div className="card__info">
            <p>
              The Trinidad and Tobago Ministry of Health has implemented hotlines for questions and concerns.
              These hotlines are staffed by a team of medical professionals and are available 24/7.<br/>
              COVID-19 National Hotline - <strong><a href='tel:877-9355'>877-9355</a> (877-WELL)</strong><br/>
              Southwest Region - <strong><a href='tel:877-9724'>877-9724</a> (87-SWRHA)</strong><br/>
              Tobago - <strong><a href='tel:800-4325'>800-4325</a> (800-HEAL)</strong>
            </p>
            <p>
              For questions of concerns, the Trinidad and Tobago Ministry of
              Health has a COVID-19 Hotline:{" "}
              <strong>
                <a href="tel:877-9355">877-9355</a> (877-WELL)
              </strong>
              , and the South-West Regional Health Authority COVID-19 Hotline:{" "}
              <strong>
                <a href="tel:877-9724">877-9724</a> (87-SWRHA)
              </strong>
            </p>
            <p>
              Social Media<br/>
              <a
                href="https://www.facebook.com/MinistryofHealthTT/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a><br/>
              {" "}
              <a
                href="https://twitter.com/MOH_TT"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a><br/>
              {" "}
              <a
                href="https://www.health.gov.tt/sitepages/default.aspx?id=292"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
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
            <p>Are you experiencing <strong>fever</strong> and any of the following:</p>
            <ul>
              <li>
                Severe difficulty breathing 
                (e.g. struggling to breathe or speaking in single words)
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
