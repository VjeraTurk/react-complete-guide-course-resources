import { useState } from "react";
import Input from "./components/Input";
import Results from "./components/Results";
import {calculateInvestmentResults} from "./util/investment.js"

function App() {

  const [input, setInput] = useState({
    initialInvestment : 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration : 10,
  })

  function handleInputsChange(id, value){
    setInput(prevInputs => {
      return {...prevInputs,
      // + enforces the string to be seen as number
        [id]: +value}
    })
  }
  const inputIsValid = input.duration >= 1

  return (
    <>
      <Input id="user-input" onChangeInput={handleInputsChange} input={input}/>
      { !inputIsValid && <p className="center">Please enter duration greater than 0</p> }
      { inputIsValid &&
      <Results id="result" input={input}></Results>
      }
    </>

  )
}

export default App
