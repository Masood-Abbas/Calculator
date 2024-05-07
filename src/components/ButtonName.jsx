import React from 'react'

const ButtonName = ({onButtonClick}) => {
  let buttonName = [
    "+",
    "-",
    "*",
    "/",
    "1",
    "2",
    "3",
    "c",
    "4",
    "5",
    "6",
    "=",
    "7",
    "8",
    "9",
    ".",
    "0",
  ];
  return (
    <div className="button names">
        {buttonName.map((val) => (
          <button onClick={()=> onButtonClick(val)}>{val}</button>
        ))}
      </div>
  )
}

export default ButtonName