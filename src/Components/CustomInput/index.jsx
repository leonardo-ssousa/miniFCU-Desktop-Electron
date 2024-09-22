import { useEffect, useRef, useState } from "react";
import { CustomInputWrapper } from "./style";

function CustomInput({ name, maxLength, onChange, defaultValue, Required}) {

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef()

  function onChangeHandle(){
    setInputValue(inputRef.current.value)
    try {
      onChange(inputRef.current)      
    } catch (error) {}
  }

  function isRequired(){    
    if(Required){
      inputRef.current.value ? inputRef.current.classList.remove("alert") : inputRef.current.classList.add("alert")
    }
  }

  return (
    <CustomInputWrapper>
      <input 
        ref={inputRef} 
        name="new-input" 
        type="text" 
        placeholder=" " 
        maxLength={maxLength} 
        onChange={() => onChangeHandle()}
        defaultValue={defaultValue}
        onBlur={isRequired}/>

      <label htmlFor="new-input" className="title">{name}</label>
      {
        maxLength &&
        <label htmlFor="new-input" className="counter">{`${inputValue.length}/16`}</label>
      }
    </CustomInputWrapper>
  );
}

export default CustomInput;