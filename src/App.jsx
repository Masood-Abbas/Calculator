import React, { useState } from "react";
import Input from "./components/Input";
import ButtonName from "./components/ButtonName";
const App = () => {
 const [calVal,setCalVal]=useState("")
 const onButtonClick=(buttonText)=>{
  if(buttonText==="c"){
    setCalVal("")
  }else if(buttonText==="="){let result=eval(calVal)
    setCalVal(result)
  }else{
    let val=calVal+buttonText
    setCalVal(val)
  }
 }
  return (
    
    <div className="maincontainer">
      <section className="container">
      <Input displayVal={calVal} />
      <ButtonName onButtonClick={onButtonClick}/>
    </section>
    </div>
  );
};

export default App;
