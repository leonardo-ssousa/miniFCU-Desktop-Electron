import axios from "axios";
import Dropdown from "../Dropdown";
import ShotcutsItem from "../ShotcutsItem";
import { ShotcutsCardWrapper } from "./styles";
import { IoAddOutline, IoClose } from "react-icons/io5"
import { createContext, useEffect, useState } from "react";
import Modal from "../Modal";
import CustomInput from "../CustomInput";

export const ShortcutContext = createContext()

function ShotcutsCard() {

  const [shortcutsGroups, setShortcutsGroups] = useState();
  const [currentGroupKeys, setCurrentGroupKeys] = useState();
  const [currentGroup, setCurrentGroup] = useState("Default");

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [newGroupName, setNewGroupName] = useState();

  useEffect(() => {
    getShortcutsGroups()
    currentGroupHandle("Default")
  }, []);

  function getShortcutsGroups(){
    axios({
      method: "get",
      url: "http://localhost:8085/getshortcutgroups"
    }).then(res => {
      console.log(res.data);
      setShortcutsGroups(res.data)
    })
  }

  function currentGroupHandle(groupName){
    setCurrentGroup(groupName)
    setCurrentGroupKeys(null)
    axios({
      method: "get",
      url: `http://localhost:8085/getshortcutgroup?groupname=${groupName}`,
    }).then(res => {          
      setCurrentGroupKeys(res.data)
    })
  }

  function createNewGroup() {  
    if(newGroupName){
      axios({
        method: "get",
        url: `http://localhost:8085/createshortcutgroup?groupname=${newGroupName}`
      }).then(res => {
        if(res.status == 200){
          getShortcutsGroups()
          setCurrentGroup(newGroupName.replace(" ", ""))
          currentGroupHandle(newGroupName.replace(" ", ""))
          setIsOpenModal(false)
        }        
      })
    } else {
      console.log("Invalid group name")    
    }
  }

  return ( 
    <ShortcutContext.Provider value={[currentGroup]}>

      <ShotcutsCardWrapper>
        <div className="card-header">
          <h1>Atalhos</h1>
          <div className="drop">
            {
              shortcutsGroups &&
              <Dropdown itens={shortcutsGroups} currentValue={currentGroup} onChange={currentGroupHandle}/>
            }
          </div>
          <div className="add-btn" onClick={() => setIsOpenModal(true)}>
              <IoAddOutline />
            </div>
        </div>
        <main className="card-content">
          {
            currentGroupKeys != undefined ?
            <>
              <ShotcutsItem selectedKey={currentGroupKeys.cima} name={"Cima"}  />
              <ShotcutsItem selectedKey={currentGroupKeys.baixo} name={"Baixo"} />
              <ShotcutsItem selectedKey={currentGroupKeys.centro} name={"Centro"}/>
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

        {
          isOpenModal &&
          <Modal>
            <section className="modal-container">              
              <div className="closeBtn" onClick={() => setIsOpenModal(false)}><IoClose /></div>
              <h2>Grupo de atalhos:</h2>
              <CustomInput name={"Nome do novo grupo"} maxLength={16} onChange={e => setNewGroupName(e.value)} Required/>
              <button onClick={e => createNewGroup()}>Adicionar</button>
            </section>
          </Modal>
        }
      </ShotcutsCardWrapper>
    </ShortcutContext.Provider>
   );
}

export default ShotcutsCard;