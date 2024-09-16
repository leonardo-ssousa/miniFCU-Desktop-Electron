import axios from "axios";
import Dropdown from "../Dropdown";
import ShotcutsItem from "../ShotcutsItem";
import { ShotcutsCardWrapper } from "./styles";
import { IoAddOutline } from "react-icons/io5"
import { useEffect, useState } from "react";

let options = ["Padrão","Photoshop", "Discord", "Chrome", "Illustrator"]

function ShotcutsCard() {

  const [shortcutsGroups, setShortcutsGroups] = useState();
  const [currentGroupKeys, setCurrentGroupKeys] = useState();

  useEffect(() => {
    getShortcutsGroups()
    currentGroupHandle("Default")
  }, []);

  function getShortcutsGroups(){
    axios({
      method: "get",
      url: "http://localhost:8085/getshortcutgroups"
    }).then(res => {
      setShortcutsGroups(res.data)
    })
  }

  function currentGroupHandle(groupName){
    setCurrentGroupKeys(null)
    axios({
      method: "get",
      url: `http://localhost:8085/getshortcutgroup?groupname=${groupName}`,
    }).then(res => {
      console.log(res.data);      
      setCurrentGroupKeys(res.data)
    })
  }

  return ( 
    <ShotcutsCardWrapper>
      <div className="card-header">
        <h1>Atalhos</h1>
        <div className="drop">
          {
            shortcutsGroups &&
            <Dropdown itens={shortcutsGroups} currentValue={"Default"} onChange={currentGroupHandle}/>
          }
        </div>
        <div className="add-btn">
            <IoAddOutline />
          </div>
      </div>
      <main className="card-content">
        {
          currentGroupKeys != undefined ?
          <>
            {console.log(currentGroupKeys.ap)}
            <ShotcutsItem selectedKey={"F13"} name={"Cima"}  />
            <ShotcutsItem selectedKey={"F14"} name={"Baixo"} />
            <ShotcutsItem selectedKey={"F15"} name={"Centro"}/>
            <ShotcutsItem selectedKey={currentGroupKeys.hdr} name={"HDR"} />
            <ShotcutsItem selectedKey={currentGroupKeys.apr} name={"APR"} />
            <ShotcutsItem selectedKey={currentGroupKeys.nav} name={"NAV"} />
            <ShotcutsItem selectedKey={currentGroupKeys.vs}  name={"VS"}  />
            <ShotcutsItem selectedKey={currentGroupKeys.ap}  name={"AP"}  />
          </> :
          <>
          <ShotcutsItem selectedKey={"-"} name={"Cima"}  />
          <ShotcutsItem selectedKey={"-"} name={"Baixo"} />
          <ShotcutsItem selectedKey={"-"} name={"Centro"}/>
          <ShotcutsItem selectedKey={"-"} name={"HDR"} />
          <ShotcutsItem selectedKey={"-"} name={"APR"} />
          <ShotcutsItem selectedKey={"-"} name={"NAV"} />
          <ShotcutsItem selectedKey={"-"} name={"VS"}  />
          <ShotcutsItem selectedKey={"-"} name={"AP"}  />
          </>
        }
      </main>
    </ShotcutsCardWrapper>
   );
}

export default ShotcutsCard;