import React from "react"
import { navigate } from "gatsby"
import Select from "react-select"

const options = [{ value: "trinidad", label: "Trinidad And Tobago" }]

export const CountryPicker = () => {
  const handleChange = selectedOption => {
    navigate(`/${selectedOption.value}`)
  }

  return (
    <div style={{ width: "100%" }}>
      <Select onChange={handleChange} options={options} />
    </div>
  )
}
