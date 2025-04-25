import React from 'react'
import "../../css/commons/Select.css"

function Select({ label, name, value, onChange, options }) {
  return (
    <div className="select-container">
      {label && <label htmlFor={name} className='select-label'>{label}</label>}
      <select
        className="select-box"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.code} - {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select