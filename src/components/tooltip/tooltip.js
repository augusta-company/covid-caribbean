import React from "react"
import "./tooltip.css"

export const Tooltip = ({ text, tooltipText }) => {
  return (
    <div className="tooltip">
      {text}
      <span className="tooltip-text">{tooltipText}</span>
    </div>
  )
}
