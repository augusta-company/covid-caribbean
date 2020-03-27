import React from "react"
import { Button } from "./button"

export const MildSymptomps = (dispatch, index, items) => {
  return (
    <div key="mildSymptomps" className="card">
      <div className="card__info">
        <p><strong>Question Two</strong></p>
        <p>Are you experiencing any of the following:</p>
        <ul>
          <li>Mild to moderate shortness of breath</li>
          <li>Inability to lie down because of difficulty breathing</li>
          <li>
            Chronic health conditions that you are having difficulty managing
            because of difficulty breathing
          </li>
        </ul>
      </div>

      <div className="btn_container">
        <Button
          selected={items[index]?.flag === "LightSymptomps"}
          onClick={() => dispatch({ type: "LightSymptomps", index })}
        >
          No
        </Button>
        <Button
          selected={items[index]?.flag === "MediumWarning"}
          onClick={() => dispatch({ type: "MediumWarning", index })}
        >
          Yes
        </Button>
      </div>
    </div>
  )
}
