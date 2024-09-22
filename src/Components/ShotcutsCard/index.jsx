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
  const [currentGroup, setCurrentGroup] = useState();
  const [isOpenModal, setIsOpenModal] = useState(true);

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

  return ( 
    <ShortcutContext.Provider value={[currentGroup]}>

      <ShotcutsCardWrapper>
        <div className="card-header">
          <h1>Atalhos</h1>
          <div className="drop">
            {
              shortcutsGroups &&
              <Dropdown itens={shortcutsGroups} currentValue={"Default"} onChange={currentGroupHandle}/>
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
              <CustomInput name={"Nome do novo grupo"} maxLength={16}/>
              <button onClick={"setIsOpenModal(false)"}>Adicionar</button>
            </section>
          </Modal>
        }
      </ShotcutsCardWrapper>
    </ShortcutContext.Provider>
   );
}

export default ShotcutsCard;