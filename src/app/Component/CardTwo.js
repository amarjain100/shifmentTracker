"use client"
import React, { useState } from 'react'
import CreateShipment from './CreateShipment'


export function CardTwo({ value }) {
  const [isShown, setIsShown] = useState(false);
  const [compval, setCompVal] = useState(null)
  
  const handleClick = event => {
    setIsShown(true);
    setCompVal(value)
    console.log(value)
  }

  return (
    <div className="w-[300px] rounded-md border">

      <div className="p-4">
        <button
          type="button"
          onClick={handleClick}
          className="text-lg font-bold hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
        >
          {value}
        </button>
        {isShown && <CreateShipment />}
      </div>
    </div>
  )
}
