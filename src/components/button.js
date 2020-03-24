import React from "react"

export const Button = props => {
  return (
    <button
      className={`btn ${props.selected ? "btn--selected" : ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
