import { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { TbEqual } from 'react-icons/tb'
import * as math from 'mathjs'
import Buttons from "./components/Buttons.jsx"
import Input from "./components/Input.jsx"
import Title from "./components/Title.jsx"

function App() {
  const [output, setOutput] = useState('')
  const [expre, setExpre] = useState('')
  const operators = ['+', '-', '*', '/',]

  function updateExpre(value) {
    if (operators.includes(expre[0])) { 
      setExpre(prevExpre => [output, ...prevExpre, value + ''])
    } else {
      setExpre(prevExpre => [...prevExpre, value + ''])
    }
  }

  function toggleClear() {
    setOutput('')
    setExpre('')
  }

  function toggleBackSpace() {
    setExpre(expre.slice(0, -1))
  }

  function solveExpre() {
    let problem = ''
    let result = output

    if (result === '' || operators.includes(expre[0])) {
      problem = output + expre.join('');
    } else {
      problem = expre.join('');
    }
    setOutput(math.evaluate(problem));
    setExpre('')
  }

  return (
    <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-screen flex flex-col justify-center items-center'>
      <Title />
      <div className=' bg-slate-500 w-auto h-auto rounded-[20px] px-11 py-5 drop-shadow-4xl border-[1px] border-tertiary'>
        <div className="flex flex-row">
          <Input text={output} value={expre}/>
        </div>
        <div className="flex">
          <Buttons numeral="1" handleClick={updateExpre}/>
          <Buttons numeral="2" handleClick={updateExpre}/>
          <Buttons numeral="3" handleClick={updateExpre}/>
          <Buttons numeral="+" color="bg-secondary" handleClick={updateExpre}/>
        </div>
        <div className="flex">
          <Buttons numeral="4" handleClick={updateExpre}/>
          <Buttons numeral="5" handleClick={updateExpre}/>
          <Buttons numeral="6" handleClick={updateExpre}/>
          <Buttons numeral="-" color="bg-secondary" handleClick={updateExpre}/>
        </div>
        <div className="flex">
          <Buttons numeral="7" handleClick={updateExpre}/>
          <Buttons numeral="8" handleClick={updateExpre}/>
          <Buttons numeral="9" handleClick={updateExpre}/>
          <Buttons numeral="*" color="bg-secondary" handleClick={updateExpre}/>
        </div>
        <div className="flex">
          <Buttons numeral="." handleClick={updateExpre}/>
          <Buttons numeral="0" wide={true} handleClick={updateExpre}/>
          <Buttons numeral="/"color="bg-secondary" handleClick={updateExpre}/>
        </div>
        <div className="flex">
          <Buttons numeral="clear" color="bg-tertiary" wide={true} handleClick={toggleClear}/>
          <Buttons numeral={<AiOutlineArrowLeft />} color="bg-tertiary" handleClick={toggleBackSpace}/>
          <Buttons numeral={<TbEqual />} color="bg-tertiary" handleClick={solveExpre}/>
        </div>
      </div>
    </div>
  )
}

export default App
