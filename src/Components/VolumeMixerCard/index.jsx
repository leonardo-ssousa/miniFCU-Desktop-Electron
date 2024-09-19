import { createContext, useEffect, useState } from "react";
import VolumeItem from "../VolumeItem";
import { VolumeMixerCardWrapper } from "./styles";
import { IoAddOutline } from "react-icons/io5"
import axios from "axios";
import AddAppModal from "../AddAppModal";

export const VolumeMixerContext = createContext()

function VolumeMixerCard() {

  const [savedApps, setSavedApps] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    refreshSavedApps()
  }, [])

  function refreshSavedApps() {
    axios({
      method: "get",
      url: "http://localhost:8085/savedprocesslist ",
      responseType: "json"
    }).then((res) => {
      if (res.status = 200) {
        setSavedApps(res.data)
      }
    })
  }

  return (
    <VolumeMixerContext.Provider value={[refreshSavedApps]}>
      <VolumeMixerCardWrapper>
        {
          openModal &&
          <AddAppModal isOpen={openModal} setIsOpen={setOpenModal} title={"Adicionar"} callBack={refreshSavedApps}/>
        }
        <div className="card-header">
          <h1>Volume Mixer</h1>
        </div>
        <main className="card-content">
          <header>
            <h4>Apps Salvos</h4>
            <div className="add-btn" onClick={() => setOpenModal(true)}>
              <IoAddOutline />
            </div>
          </header>
          <section className="itens-container">
            {
              savedApps.map((app, i) => <VolumeItem key={i} id={i} process={app.process} name={app.name} pid={app.pid} />)
            }
          </section>
        </main>
      </VolumeMixerCardWrapper>
    </VolumeMixerContext.Provider>
  );
}

export default VolumeMixerCard;