import React from 'react'
import Card from './customs/Card'

function ResultCard({ header, footer, result }) {
  return (
    <Card
        header={header}
        footer={footer}
    >
        <p>{result} </p>
    </Card>
  )
}

export default ResultCard