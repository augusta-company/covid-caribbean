import React from "react"
import { Button } from "../button"

export const LightWarning = (dispatch, index, items) => (
  <div key="lightWarning">
    <div className="card">
      <p>
        Please stay at home. As a precaution, the Ministry of Health is
        asking anyone with symptoms (fever, cough, sneezing, or sore throat)
        to stay home for 10 days. If your symptoms worsen, call your family
        physician. If you are unable to reach your regular health care provider,
        call 877-WELL to speak with a health representative.
      </p>
      <p>
        <strong>Your self-assessment is not complete.</strong> Finish the
        remaining questions to obtain complete recommendations on what steps you
        should take.
      </p>
    </div>
    <div key="travelOutside" className="card">
      <p>
        Did you develop symptoms within 14 days of travel outside of Trininad
        and Tobago?
      </p>
      <div>
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
