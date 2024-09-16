import { useEffect, useRef, useState } from "react";
import { DropdownWrapper } from "./style";
import { IoChevronDown } from "react-icons/io5"



function Dropdown({itens, currentValue, onChange}) {

  const [selected, setSelected] = useState(currentValue != undefined ? currentValue : itens[0]);
  //console.log(currentValue);
  const dropRef = useRef()
  const dropItensRef = useRef()

  useEffect(() => {
    console.log("mudou");
    setSelected(currentValue)
  }, [currentValue]);

  const changeSelected = (index) => {
    setSelected(itens[index])
    onChange(itens[index])
  }

  const showList = () => {
    dropItensRef.current.classList.remove("hide")
  }

  const hideList = () => {
    dropItensRef.current.classList.add("hide")
  }

  return ( 
    <DropdownWrapper className="Dropdown" onMouseEnter={showList} onMouseLeave={hideList} ref={dropRef}>
      <p>{selected}</p>
      <IoChevronDown />
      <div className="gap"></div>
      <section ref={dropItensRef} className="hide options">
        {
          itens.map((item, i) => {

            return <p className="item" key={i} onClick={() => {changeSelected(i)}}>{itens[i]}</p>            
          })
        }
      </section>
    </DropdownWrapper>
   );
}

export default Dropdown;