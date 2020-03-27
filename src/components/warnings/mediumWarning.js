import React from "react"

export const MediumWarning = () => (
  <div key="mediumWarning" className="card">
    <div className="card__info">
      <p>
        <span role="img" aria-label="doctor-health">
          ☎️
        </span>{" "}
        Please consult one of the below hotlines immediately:
      </p>
      <p>
        COVID-19 National Hotline - <a href="tel:877-9355">877-9355</a> (877-WELL)<br/>
        Southwest Region - <a href="tel:877-9724">877-9724</a> (87-SWRHA)<br/>
        Tobago - <a href="tel:800-4325">800-4325</a> (800-HEAL)
      </p>
      <p>
        <strong>
          and a medical professional will advise you regarding isolation
          and notice to employers.
        </strong>
      </p>
    </div>
  </div>
)
