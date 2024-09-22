import { useEffect, useState } from "react";
import { AddAppModalWrapper } from "./style";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import CustomInput from "../CustomInput";

function AddAppModal({ isOpen, setIsOpen, processValue, friendlyValue, title, hideDescription, callBack }) {

  const [inputFriendlyName, setInputFriendlyName] = useState("");
  const [itensList, setItensList] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8085/openprocesslist",
      responseType: "json"
    }).then((res) => {
      setItensList(res.data);
    })
  }, []);

  function saveNewProcess() {
    let process = document.querySelector("#process-input").value

    axios({
      method: "get",
      url: `http://localhost:8085/savenewapp?processname=${process}&friendlyname=${inputFriendlyName}`,
    }).then((res) => {
      console.log(res);
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
        <select name="app" id="process-input" defaultValue={"sad"} >
          {
            itensList && processValue == undefined ?
              itensList.map(item => <option key={item.process} value={item.process}>{item.process}</option>) : 
              itensList && processValue != undefined ? <option value={processValue}>{processValue}</option> : <option value="loading">Carregando...</option>
          }
        </select>
        <section className="friendly-container">
          <CustomInput name={"Nome amigável"} maxLength={16} onChange={e => setInputFriendlyName(e.value)}/>
          {/* <label htmlFor="friendlyName">Nome amigável:</label>
          <label htmlFor="friendlyName" className="input-counter">{`${inputFriendlyName.length} / 16`}</label>
          <input type="text" name="friendlyName" defaultValue={friendlyValue} maxLength={16} onChange={(e) => setInputFriendlyName(e.target.value)} /> */}
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