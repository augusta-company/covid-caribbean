import React from "react"
import { Button } from "./button"

export const TravelOutside = (dispatch, index, items) => {
  return (
    <div key="travelOutside" className="card">
      <p>
        Have you travelled to any countries outside Canada (including the United
        States) within the last 14 days?
      </p>

      <div>
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
