import React, { useState } from 'react'
import Input from './customs/Input.jsx'
import Select from './customs/Select.jsx'
import Button from './customs/Button.jsx'
import "../css/CurrencyConverter.css"
import "../utils/constants/currencies.js"
import currencies from '../utils/constants/currencies.js'
import { getCurrency } from '../services/currencyService.js'
import ResultCard from './ResultCard.jsx'


function CurrencyConverter() {
    const [amount, setAmount] = useState(1)
    const [baseCurrency, setBaseCurrency] = useState("USD")
    const [targetCurrency, setTargetCurrency] = useState("EUR")
    const [rate, setRate] = useState(0)
    const [result, setResult] = useState(null)

    const [convertedAmount, setConvertedAmount] = useState(0);
    const [convertedBaseCurrency, setConvertedBaseCurrency] = useState("");
    const [convertedTargetCurrency, setConvertedTargetCurrency] = useState("");

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

      setConvertedAmount(amount);
      setConvertedBaseCurrency(baseCurrency);
      setConvertedTargetCurrency(targetCurrency);
    }

    const fetchData = async () => {
      try {
        const response = await getCurrency(baseCurrency, targetCurrency);
        const calculatedValue = Number((response*amount).toFixed(2))
        setResult(calculatedValue)
        setRate(response)
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
            <ResultCard 
              header={`${convertedAmount} ${convertedBaseCurrency} =`}
              footer={`1 ${convertedBaseCurrency} = ${rate} ${convertedTargetCurrency}`}
              result={`${result} ${convertedTargetCurrency}`}
            />
          )
          : 
          null
        }
    </div>
  )
}

export default CurrencyConverter