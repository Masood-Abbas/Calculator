import React from 'react'

const Input = ({displayVal}) => {
  return (
    <div className="input data">
        <input type="text"  value={displayVal} readOnly/>
      </div>
  )
}

export default Input