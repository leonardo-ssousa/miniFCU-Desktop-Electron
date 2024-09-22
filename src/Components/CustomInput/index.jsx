import { useRef, useState } from "react";
import { CustomInputWrapper } from "./style";

function CustomInput({ name, maxLength, onChange, defaultValue}) {

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef()

  function onChangeHandle(){
    setInputValue(inputRef.current.value)
    onChange(inputRef.current)
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
        defaultValue={defaultValue}/>

      <label htmlFor="new-input" className="title">{name}</label>
      {
        maxLength &&
        <label htmlFor="new-input" className="counter">{`${inputValue.length}/16`}</label>
      }
    </CustomInputWrapper>
  );
}

export default CustomInput;