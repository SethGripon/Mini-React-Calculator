import React from 'react'

const Input = ({ value, text }) => {
  return (
    <div className='bg-primary basis-full w-full h-20 px-5 py-3  mb-5 mx-1 rounded-[10px] grid grid-rows-2'>
      <div className='flex justify-start text-center text-stone-400 font-normal'>
        {value}
      </div>
      <div className='flex justify-end text-center mb-2 font-bold text-xl'>
        {text}
      </div>
    </div>
  )
}

export default Input