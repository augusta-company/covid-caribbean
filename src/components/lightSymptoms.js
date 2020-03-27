import React from "react"
import { Button } from "./button"

export const LightSymptomps = (dispatch, index, items) => (
  <div key="lightSymptomps" className="card">
    <div className="card__info">
      <p>Are you experiencing any of the following:</p>
      <ul>
        <li>Fever</li>
        <li>Cough</li>
        <li>Sneezing</li>
        <li>Sore throat</li>
      </ul>
    </div>

    <div className="btn_container">
      <Button
        selected={items[index]?.flag === "TravelOutside"}
        onClick={() => dispatch({ type: "TravelOutside", index })}
      >
        No
      </Button>
      <Button
        selected={items[index]?.flag === "LightWarning"}
        onClick={() => dispatch({ type: "LightWarning", index })}
      >
        Yes
      </Button>
    </div>
  </div>
)
