import React from "react"
import { Button } from "./button"

export const ProvideCare = (dispatch, index, items, symptoms) => {
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
          selected={items[index]?.flag === "CloseContact"}
          onClick={() =>
            dispatch({ type: "CloseContact", index, symptoms: false })
          }
        >
          No
        </Button>
        <Button
          selected={
            items[index]?.flag === "Isolate10Warning" ||
            items[index]?.flag === "Isolate14Warning"
          }
          onClick={() => {
            if (symptoms) {
              dispatch({ type: "Isolate10Warning", index })
            } else {
              dispatch({ type: "Isolate14Warning", index })
            }
          }}
        >
          Yes
        </Button>
      </div>
    </div>
  )
}
