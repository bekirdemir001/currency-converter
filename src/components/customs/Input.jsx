import React from "react"
import "../../css/customs/Input.css"

function Input({label, name, type = "text", value, onChange, placeholder}) {
  return (
    <div className="input-container">
        {label && <label htmlFor={name} className="input-label">{label}</label>}
        <input
            className = "input-field"
            id = {name}
            name = {name} 
            type = {type}
            value = {value}
            onChange = {onChange}
            placeholder = {placeholder}
        />
    </div>
  )
}

export default Input