import React from "React"
import { Button } from "./button"

export const ProvideCare = (dispatch, index, items) => {
  return (
    <div key="provideCare" className="card">
      <p>
        Did you <strong>provide care</strong> or have 
        <strong>close contact</strong> with a person with COVID-19
        (probable or confirmed) while they were ill (cough, fever, sneezing, or
        sore throat)?
      </p>

      <div>
        <Button
          selected={items[index]?.flag === "LightSymptomps"}
          onClick={() => dispatch({ type: "LightSymptomps", index })}
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
  )
}
