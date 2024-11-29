import React from 'react'

const ScaleDiv = ({children  , className }) => {
  console.log("ScaleDiv rendered"); 
  return (
    <div className={`w-[90%]  md:w-scale-width ${className}`}>
      {children}
    </div>
  )
}

export default ScaleDiv
