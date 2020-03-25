import React from "react"

export const SelfMonitor = () => (
  <div key="SelfMoniror" className="card">
    <div className="card__info">
      <h2>
        Please self-monitor for 14 days. Since you don’t have any COVID-19
        symptoms, you don’t need to be tested for COVID-19.
      </h2>
      <p>
        However, there’s a chance you could get sick since it’s less than 14
        days since your exposure. You should self-monitor for any symptoms
        (fever, cough, sneezing, or sore throat).
      </p>
      <p>
        If you begin to develop symptoms (fever, cough, sneezing, or sore
        throat), you should
        <a
          href="http://www.health.gov.tt/images_cms/2020/CoronaVirus/Posters/Quarantine01.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
           self-isolate 
        </a>
        and take this self-assessment again. If you need more information, visit{" "}
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
