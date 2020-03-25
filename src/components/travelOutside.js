import React from "react"
import { Button } from "./button"

export const TravelOutside = (dispatch, index, items) => {
  return (
    <div key="travelOutside" className="card">
      <div className="card__info">
        <p>
          Have you travelled to any countries outside Trinidad and Tobago
          (including Venezuela) within the last 14 days?
        </p>
      </div>

      <div className="btn_container">
        <Button
          selected={items[index]?.flag === "ProvideCare"}
          onClick={() =>
            dispatch({
              type: "ProvideCare",
              index,
            })
          }
        >
          No
        </Button>
        <Button
          selected={items[index]?.flag === "Isolate14Warning"}
          onClick={() => dispatch({ type: "Isolate14Warning", index })}
        >
          Yes
        </Button>
      </div>
    </div>
  )
}
