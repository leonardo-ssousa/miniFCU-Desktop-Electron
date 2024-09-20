import { useContext, useEffect, useState } from "react";
import Dropdown from "../Dropdown";
import { ShotcutsItemWrapper, LedStatus } from "./styles";
import axios from "axios";
import { ShortcutContext } from "../ShotcutsCard";

function ShotcutsItem({name, ledIsOn, selectedKey}) {

  const [keysList, setKeysList] = useState([]);
  const [currentGroup] = useContext(ShortcutContext)

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

  function changeShortcutButtonHandle(keyToPress){

    axios({
      method: "get",
      url: `http://localhost:8085/setshortcutbutton?groupname=${currentGroup}&buttonname=${name}&keytopress=${keyToPress}`
    }).then(res => {
      console.log(res.data);
      
    })    
  }


  return ( 
    <ShotcutsItemWrapper>
      {}
      <p>{name + ":"}</p>
      <section>
        <Dropdown itens={keysList} currentValue={selectedKey} onChange={changeShortcutButtonHandle}/>
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