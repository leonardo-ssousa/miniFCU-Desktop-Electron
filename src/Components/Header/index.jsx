import { HeaderWrapper } from "./styles"
import { useTheme } from "styled-components"
import logo from "../../assets/logo.svg"
import { IoMoon, IoSunny  } from "react-icons/io5"

function Header({ serverIsConected, currentTheme, setTheme }) {
  const theme = useTheme()

  const toggleTheme =() => {
    setTheme(!currentTheme)
  }

  return ( 
    <HeaderWrapper>
      <img src={logo} alt="miniFCu" />
      <div className="toggleTheme" onClick={toggleTheme}>
        {currentTheme ? <IoMoon color={theme.principalColor}/> : <IoSunny color={theme.principalColor}/>}        
      </div>
      <p>Servidor: {serverIsConected ? "Conectado" : "Aguardando..."}</p>
    </HeaderWrapper>
   );
}



export default Header;