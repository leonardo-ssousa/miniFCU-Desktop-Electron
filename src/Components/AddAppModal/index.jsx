import { useEffect, useState } from "react";
import { AddAppModalWrapper } from "./style";
import { IoClose } from "react-icons/io5";
import Dropdown from "../Dropdown"
import axios from "axios";
import CustomInput from "../CustomInput";

function AddAppModal({ isOpen, setIsOpen, processValue, friendlyValue, title, hideDescription, callBack }) {

  const [inputFriendlyName, setInputFriendlyName] = useState("");
  const [itensList, setItensList] = useState();
  const [currentSelectedProcess, setCurrentSelectedProcess] = useState(processValue);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8085/openprocesslist",
      responseType: "json"
    }).then((res) => {

      let processList = []
      res.data.map(item => {
        processList.push(item.process)
      })

      setItensList(processList);
    })
  }, []);

  function saveNewProcess() {    
    axios({
      method: "get",
      url: `http://localhost:8085/savenewapp?processname=${currentSelectedProcess}&friendlyname=${inputFriendlyName}`,
    }).then((res) => {
      //console.log(res);
    })
    callBack && callBack()
    setIsOpen(false)
    
  }

  return (
    isOpen &&
    <AddAppModalWrapper>
      <section className="modal-wrapper">
        <h2>{title + ":"}</h2>
        <div className="closeBtn" onClick={() => setIsOpen(false)}><IoClose /></div>
        <label htmlFor="app">Selecione o app:</label>

        {
          itensList && processValue == undefined?
          <Dropdown itens={itensList} onChange={setCurrentSelectedProcess} /> : 
          processValue != undefined ? <Dropdown itens={itensList} currentValue={processValue} /> : <Dropdown itens={itensList} currentValue={"Carregando..."} />
        }
        <section className="friendly-container">
          <CustomInput name={"Nome amigável"} maxLength={16} onChange={e => setInputFriendlyName(e.value)} defaultValue={friendlyValue}/>
        </section>
        {
          hideDescription == undefined &&
          <p>O app só irá aparecer na lista se estiver emitindo algum som. Ex.: Inicie um video no navegador para que ele seja detectado.</p>
        }
        <button onClick={saveNewProcess}>Adicionar</button>
      </section>
    </AddAppModalWrapper>
  );
}

export default AddAppModal;