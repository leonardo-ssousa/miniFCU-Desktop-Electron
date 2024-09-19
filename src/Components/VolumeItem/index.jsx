import { useContext, useEffect, useState } from "react";
import { VolumeItemWrapper } from "./style";
import { IoVolumeMedium, IoEllipsisHorizontalSharp } from "react-icons/io5"
import { BsPencilFill } from "react-icons/bs";
import axios from "axios";
import AddAppModal from "../AddAppModal";
import { VolumeMixerContext } from "../VolumeMixerCard"

function VolumeItem({ id, process, name, pid }) {

  const [modalIsOPen, setModalIsOPen] = useState(false);
  const [refreshSavedApps] = useContext(VolumeMixerContext)

  return (
    <VolumeItemWrapper>
      <section className="item-id">
        <p>{id}</p>
      </section>
      <section className="item-name">
        <div className="process-name">
          <p>Process: </p>
          <p>{process}</p>
        </div>
        <div className="friendly-name">
          <p>{name}</p>
        </div>
      </section>
      {
        process != "main" &&
        <section className="option-btn" onClick={() => setModalIsOPen(!modalIsOPen)}>
          <BsPencilFill />
        </section>
      }
      <AddAppModal
        isOpen={modalIsOPen}
        setIsOpen={setModalIsOPen}
        friendlyValue={name}
        processValue={process}
        title={"Editar"}
        hideDescription
        callBack={refreshSavedApps} />
    </VolumeItemWrapper>
  );
}

export default VolumeItem;