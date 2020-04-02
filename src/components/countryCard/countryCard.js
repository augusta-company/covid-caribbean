import React from "react"
import { Link } from "gatsby"

import "./countryCard.css"

export const CountryCard = ({ country, casesData }) => {
  return (
    <Link
      to={`/${country.slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="country__card">
        <div className="country__info">
          <span className="country__flag" role="img" aria-label="attention">
            {country.flag}
          </span>{" "}
          <span className="country__name">{country.name}</span>
        </div>
        <div className="country__data">
          <div className="country__data-container">
            <span className="country__data-total">
              {casesData?.confirmed ? casesData.confirmed : "--"}
            </span>
            <span className="country__data-label">cases</span>
          </div>
          <div className="country__data-container">
            <span className="mb-sm">
              {casesData?.recovered ? casesData.recovered : "--"}
            </span>
            <span className="country__data-label">recoveries</span>
          </div>
          <div className="country__data-container">
            <span className="mb-sm">
              {casesData?.deaths ? casesData.deaths : "--"}
            </span>
            <span className="country__data-label">deaths</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
