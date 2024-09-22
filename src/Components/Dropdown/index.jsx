import { useEffect, useRef, useState } from "react";
import { DropdownWrapper } from "./style";
import { IoChevronDown } from "react-icons/io5"

function Dropdown({itens, currentValue, onChange}) {

  const [selected, setSelected] = useState();
  const dropRef = useRef()
  const dropItensRef = useRef()

  useEffect(() => {
    setSelected(currentValue != undefined ? currentValue : itens[0])
  }, [currentValue, itens]);

  const changeSelected = (index) => {
    setSelected(itens[index])
    console.log(typeof(onChange))      
    try {
      onChange(itens[index])
    } catch (err) {}
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
          itens &&
          itens.map((item, i) => {

            return <p className="item" key={i} onClick={() => {changeSelected(i)}}>{itens[i]}</p>            
          })
        }
      </section>
    </DropdownWrapper>
   );
}

export default Dropdown;