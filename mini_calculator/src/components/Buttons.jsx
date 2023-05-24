import React from 'react'

const Button = ({ numeral, color, wide, handleClick }) => {
  const confirmBg = () => color ? `${color} text-white hover:bg-amber-400 hover:text-black shadow-lg ${`shadow-${color}/50`}` : "bg-primary hover:bg-stone-600 hover:text-white shadow-lg shadow-primary/50"
  const confirmSize = () => wide ? `basis-3/4`: "basis-1/4"

  return (
    <div className={`${confirmBg()} ${confirmSize()} m-1 px-5 py-3 rounded-[10px] cursor-pointer select-none `} 
          onClick={() => handleClick(numeral)}>
      <div className="flex justify-center align-center font-bold text-2xl tracking:wider">
        {numeral}
      </div>
    </div>
  )
}

export default Button