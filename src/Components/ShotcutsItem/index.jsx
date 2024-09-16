import { useEffect, useState } from "react";
import Dropdown from "../Dropdown";
import { ShotcutsItemWrapper, LedStatus } from "./styles";
import axios from "axios";

function ShotcutsItem({name, ledIsOn, selectedKey}) {

  const [keysList, setKeysList] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8085/buttonslist"      
    }).then(res => {   

      let keysListRequest = []
      Object.keys(res.data).map(key => {
        keysListRequest.push(key)
      })

      setKeysList(keysListRequest);      
    })
  }, []);

  // ["A","B","C","D","E","F","G","H","I","J","K"]

  return ( 
    <ShotcutsItemWrapper>
      <p>{name + ":"}</p>
      <section>
        <Dropdown itens={keysList} currentValue={selectedKey}/>
        <LedStatus haveled={ledIsOn}/>
      </section>
      {ledIsOn != undefined &&
        <section>
          <p>Alternar LED:</p>
          <input type="checkbox" />
        </section>
      }
    </ShotcutsItemWrapper>
   );
}

export default ShotcutsItem;