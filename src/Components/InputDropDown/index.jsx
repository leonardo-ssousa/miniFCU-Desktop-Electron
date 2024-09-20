import { useEffect, useRef, useState } from "react";
import { InputDropDownWrapper } from "./styles";
import { IoChevronDown } from "react-icons/io5"

function InputDropDown({ itens, currentValue}) {

  const optionsContainer = useRef()
  const inputComp = useRef()
  const [showValue, setShowValue] = useState(currentValue);

  useEffect(() => {
    inputComp.current.value = currentValue
  }, [currentValue]);

  function toggleOptionsList() {
    optionsContainer.current.classList.toggle("hide")
  }

  return ( 
    <InputDropDownWrapper>
      <section className="current-value-container">
        <input ref={inputComp} type="text" name="drop-value" autoCorrect="false" onFocus={() => toggleOptionsList()} onBlur={() => toggleOptionsList()}/>
        <IoChevronDown className="chevron-icon" />
      </section>
      <section ref={optionsContainer} className="options-container hide" >
        {
          itens.map(item => {
            return  <p onClick={() => inputComp.current.value = item}>{item}</p>
          })
        }
      </section>
    </InputDropDownWrapper>
   );
}

export default InputDropDown;