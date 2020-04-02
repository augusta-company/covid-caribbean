import React, { useEffect, useState } from "react"
import countriesData from "../constants/countries"
import Augusta from "../svgs/power-augusta.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CountryCard } from "../components/countryCard"
import { getCasesData } from "../utils"
import "../styles.css"

const IndexPage = () => {
  let [casesData, setCasesData] = useState({})
  let [error, setError] = useState("")
  useEffect(() => {
    let endResult = {}
    const promises = countriesData.map(country => getCasesData(country.slug))

    Promise.all(promises)
      .then(result => {
        result.forEach(
          ({ slug, confirmed, recovered, deaths }) =>
            (endResult[slug] = { confirmed, recovered, deaths })
        )
        setCasesData(endResult)
      })
      .catch(err => {
        setError("There was an error fetching the cases")
        setTimeout(() => {
          setError("")
        }, 3000)
      })
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      {Boolean(error) && (
        <div
          style={{
            backgroundColor: "#de263e",
            color: "whitesmoke",
            width: "100%",
            padding: "8px 10px",
          }}
        >
          <span>{error}</span>
        </div>
      )}
      <h1 className="title">Covid Caribbean Resources</h1>
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
        <p className="intro">
          The latest updates, trusted resources, and symptom checking. This
          online tool will determine whether you may need further assessment or
          testing for COVID-19. Please select the country you are in.
        </p>
        <p
          className="scroll-instruction"
          style={{ textAlign: "center", color: "#c9c9c9", margin: "40px 0" }}
        >
          Scroll down to view the entire list
        </p>
        <div className="countries-container">
          {countriesData.map(country => (
            <CountryCard
              key={country.slug}
              country={country}
              casesData={casesData[country.slug]}
            />
          ))}

          <a
            href={`https://github.com/augusta-company/covid-caribbean`}
            target="_blank"
            rel="noopener noreferrer"
            className="add-country__wrapper"
          >
            <div className="country__card add-country">
              <span className="add-country__plus">+</span>
              <span className="add-country__text">Add your country</span>
            </div>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
