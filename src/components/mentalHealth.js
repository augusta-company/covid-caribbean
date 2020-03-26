import React from "react"
import { Button } from "./button"

export const MentalHealth = (dispatch, index, items, symptoms) => {
  return (
    <div key="mentalHealth" className="card">
      <div className="card__info">
        <p>
        Are you experiencing persistent and overwhelming emotions 
        related to the COVID outbreak in Trinidad and Tobago?
        </p>
      </div>

      <div className="btn_container">
        <Button
          selected={
            items[index]?.flag === "Isolate10Warning-no" ||
            items[index]?.flag === "NoSymptoms"
          }
          onClick={() => {
            if (symptoms) {
              dispatch({ type: "Isolate10Warning-no", index })
            } else {
              dispatch({ type: "NoSymptoms", index })
            }
          }}
        >
          No
        </Button>
        <Button
          selected={
            items[index]?.flag === "Isolate10Warning-yes" ||
            items[index]?.flag === "MentalWarning"
          }
          onClick={() => {
            if (symptoms) {
              dispatch({ type: "Isolate10Warning-yes", index })
            } else {
              dispatch({ type: "MentalWarning", index })
            }
          }}
        >
          Yes
        </Button>
      </div>
    </div>
  )
}
