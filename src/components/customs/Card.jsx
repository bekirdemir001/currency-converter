import React from 'react'
import "../../css/commons/Card.css"

function Card({ header, children, footer }) {
  return (
    <div className="card-container">
      {header && <p className="card-header">{header}</p>}
      <div className="card-content">
        {children}
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  )
}

export default Card