import React from "react"

export const NoSymptoms = () => (
  <div key="noSymptoms" className="card">
    <div className="card__info">
      <h2>
        Since you don’t have any COVID-19 symptoms, you don’t need to be tested
        for COVID-19.
      </h2>
      <p>
        Please self-monitor, wash your hands frequently, and practice physical
        distancing. If you develop any symptoms (fever, cough, sneezing, sore
        throat, or difficulty breathing), or become aware of any potential
        exposures to cases of COVID-19, take this self-assessment again.
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
      <p>
        If you are experiencing symptoms other than COVID-19, contact your
        family physician. If you are unable to reach your regular health care
        provider, call 877-WELL to speak with a health representative.
      </p>
    </div>
  </div>
)
