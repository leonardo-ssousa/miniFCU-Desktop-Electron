import Dropdown from "../Dropdown";
import ShotcutsItem from "../ShotcutsItem";
import { ShotcutsCardWrapper } from "./styles";
import { IoAddOutline } from "react-icons/io5"

let options = ["Padrão","Photoshop", "Discord", "Chrome", "Illustrator"]

function ShotcutsCard() {
  return ( 
    <ShotcutsCardWrapper>
      <div className="card-header">
        <h1>Atalhos</h1>
        <div className="drop">
          <Dropdown itens={options} />
        </div>
        <div className="add-btn">
            <IoAddOutline />
          </div>
      </div>
      <main className="card-content">
        <ShotcutsItem name={"Cima"} selectedKey={"F13"}/>
        <ShotcutsItem name={"Baixo"} selectedKey={"F14"}/>
        <ShotcutsItem name={"Centro"}  selectedKey={"F15"}/>
        <ShotcutsItem name={"HDR"} selectedKey={"F16"}/>
        <ShotcutsItem name={"APR"} selectedKey={"F17"}/>
        <ShotcutsItem name={"NAV"} selectedKey={"F18"}/>
        <ShotcutsItem name={"VS"}  selectedKey={"F19"}/>
        <ShotcutsItem name={"AP"}  selectedKey={"F20"}/>
      </main>
    </ShotcutsCardWrapper>
   );
}

export default ShotcutsCard;