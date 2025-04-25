import React, { useEffect, useState } from 'react'
import Input from './customs/Input.jsx'
import Select from './customs/Select.jsx'
import Button from './customs/Button.jsx'
import Card from './customs/Card.jsx'
import "../css/CurrencyConverter.css"
import "../utils/constants/currencies.js"
import currencies from '../utils/constants/currencies.js'
import { getCurrency } from '../services/currencyService.js'


function CurrencyConverter() {
    const [amount, setAmount] = useState(1)
    const [baseCurrency, setBaseCurrency] = useState("USD")
    const [targetCurrency, setTargetCurrency] = useState("EUR")
    const [result, setResult] = useState(null)

    const handleChangeAmount = (e) => {
      setAmount(e.target.value)
    }

    const handleChangeBaseCurrency = (e) => {
      setBaseCurrency(e.target.value)
    }

    const handleChangeTargetCurrency = (e) => {
      setTargetCurrency(e.target.value)
    }

    const handleClick = (e) => {
      fetchData()
    }

    const fetchData = async () => {
      try {
        const response = await getCurrency(baseCurrency, targetCurrency);
        setResult(response)
      } catch (error) {
        console.error("Error: ", error)
      }
    }

  return (
    <div className="currency">
        <h1>Currency Converter</h1>
        <Input
            label = "Amount"
            name = "amount"
            value = {amount}
            onChange={handleChangeAmount}
            type = "number"
        />
        <Select 
            label="From"
            name="baseCurrency"
            value={baseCurrency}
            onChange={handleChangeBaseCurrency}
            options={currencies}  
        />
        <Select 
            label="To"
            name="targetCurrency"
            value={targetCurrency}
            onChange={handleChangeTargetCurrency}
            options={currencies}  
        />
        <Button text="Convert" onClick={handleClick} />
        {
          result ? 
          (
            <Card
              header={`${amount} ${baseCurrency} =`}
              footer={`1 ${baseCurrency} = ${result} ${targetCurrency}`}
            >
              <p>{`${Number((result*amount).toFixed(2))} ${targetCurrency}`} </p>
            </Card>
          )
          : 
          null
        }
    </div>
  )
}

export default CurrencyConverter