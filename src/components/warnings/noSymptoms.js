import React from "react"

export const NoSymptoms = () => (
  <div key="noSymptoms" className="card">
    <div className="card__info">
      <h3>
        <span role="img" aria-label="doctor-health">
          ✅
        </span>{" "}
        Please stay at home. You do not need testing for COVID-19.
      </h3>
      <p>
        <strong>
          Since you don't have symptoms, you do not need testing for COVID-19 at
          this time.
        </strong>
         However, there’s a chance you could get sick since your exposure. You
        should self-monitor for any symptoms (fever, cough, sneezing, sore
        throat, or difficulty breathing). If you begin to develop these, you
        should take this self-assessment again.
      </p>
      <p>
        If you are a health care worker, follow the advice of your employer.
      </p>
      <p>
        If you need more information, go to{" "}
        <a
          href="http://www.health.gov.tt/sitepages/default.aspx?id=292"
          target="_blank"
          rel="noopener noreferrer"
        >
          TNT COVID-19 Website
        </a>
        .
      </p>
    </div>
  </div>
)
