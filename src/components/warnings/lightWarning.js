import React from "react"
import { Button } from "../button"

export const LightWarning = (dispatch, index, items) => (
  <div key="lightWarning">
    <div className="card">
      <div className="card__info">
        <h3>
          <span role="img" aria-label="home">
            🏠
          </span>{" "}
          <strong>Please stay at home</strong>. 
        </h3>
        <p>
          Please stay at home. As a precaution, the Ministry of Health is asking 
          anyone with mild symptoms (fever, cough, sneezing or sore throat) 
          to stay home. Please contact the hotline below, and a medical professional 
          will advise you regarding isolation and notice to employers.<br/><br/>
          COVID-19 National Hotline - <a href="tel:877-9355">877-9355</a> (877-WELL)<br/>
          Southwest Region - <a href="tel:877-9724">877-9724</a> (87-SWRHA)<br/>
          Tobago - <a href="tel:800-4325">800-4325</a> (800-HEAL)<br/>
        </p>
        <p>
          <strong>Your self-assessment is not complete. Finish the
          remaining questions to obtain complete recommendations on what steps
          you should take.</strong>
        </p>
      </div>
    </div>
    <div key="travelOutside" className="card">
      <div className="card__info">
        <p>
          Did you develop symptoms within 14 days of travel outside of Trinidad
          and Tobago?
        </p>
      </div>
      <div className="btn_container">
        <Button
          selected={items[index]?.flag === "ProvideCare"}
          onClick={() => dispatch({ type: "ProvideCare", index })}
        >
          No
        </Button>
        <Button
          selected={items[index]?.flag === "Isolate10Warning"}
          onClick={() => dispatch({ type: "Isolate10Warning", index })}
        >
          Yes
        </Button>
      </div>
    </div>
  </div>
)
