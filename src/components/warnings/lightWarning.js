import React from "react"
import { Button } from "../button"

export const LightWarning = (dispatch, index, items) => (
  <div key="lightWarning">
    <div className="card">
      <div className="card__info">
        <p>
          <strong>Please stay at home</strong>. As a precaution, the Ministry of
          Health is asking <strong>anyone with symptoms</strong> (fever, cough,
          sneezing, or sore throat){" "}
          <strong>
            to stay home for 10 days. If your symptoms worsen, call your family
            physician
          </strong>
          . If you are unable to reach your regular health care provider, call
          877-WELL to speak with a health representative.
        </p>
        <p>
          <strong>Your self-assessment is not complete.</strong> Finish the
          remaining questions to obtain complete recommendations on what steps
          you should take.
        </p>
      </div>
    </div>
    <div key="travelOutside" className="card">
      <div className="card__info">
        <p>
          Did you develop symptoms within 14 days of travel outside of Trininad
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
