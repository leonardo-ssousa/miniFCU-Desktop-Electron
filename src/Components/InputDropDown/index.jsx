import { useEffect, useRef, useState } from "react";
import { InputDropDownWrapper } from "./styles";
import { IoChevronDown } from "react-icons/io5"

function InputDropDown({ itens, currentValue, onChange }) {

  const optionsContainer = useRef()
  const inputComp = useRef()
  
  const [filtredList, setFiltredList] = useState("");

  useEffect(() => {
    inputComp.current.classList.remove("alert")
    inputComp.current.value = currentValue
  }, [currentValue]);

  function showOptionsList() {
    optionsContainer.current.classList.remove("hide")
  }

  function hideOptionsList() {
    setTimeout(() => {
      optionsContainer.current.classList.toggle("hide")
      const isValidKey = itens.find(key => key == inputComp.current.value)

      if(isValidKey != undefined){
        inputComp.current.classList.remove("alert")
        onChange && onChange(isValidKey)
      } else {
        inputComp.current.classList.add("alert")
        console.log("Tecla incorreta selecionada!")
      }
    }, 80)
  }

  function filterhandle(filter){
    const result = itens.filter(item => item.toUpperCase().slice(0, filter.length) == filter.toUpperCase())
    setFiltredList(result)
  }


  return (
    <InputDropDownWrapper>
      <section className="current-value-container">
        <input ref={inputComp}
          type="text" name="drop-value"
          autoCorrect="false"
          onFocus={() => showOptionsList()}
          onBlur={() => hideOptionsList()} 
          onChange={() => filterhandle(inputComp.current.value)}/>
        <IoChevronDown className="chevron-icon" />
      </section>
      <section ref={optionsContainer} className="options-container hide" >
        {
          filtredList ?
          filtredList.map(item => {
            return <p id="drop-item" key={item} onClick={() => inputComp.current.value = item}> {item}</p>
          }) 
          :
          itens.map(item => {
            return <p id="drop-item" key={item} onClick={() => inputComp.current.value = item}> {item}</p>
          }) 
        }
      </section>
    </InputDropDownWrapper >
  );
}

export default InputDropDown;