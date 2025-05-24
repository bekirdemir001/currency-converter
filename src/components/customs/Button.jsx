import React from 'react'
import "../../css/customs/Button.css"

function Button({ text, onClick}) {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  )
}

export default Button