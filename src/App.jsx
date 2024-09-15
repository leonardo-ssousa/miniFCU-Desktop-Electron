import { useEffect, useState } from 'react';
import { darkTheme, lightTheme } from './Theme'
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from './GlobalStyle'
import Header from './Components/Header'
import VolumeMixerCard from './Components/VolumeMixerCard';
import ShotcutsCard from './Components/ShotcutsCard';

function App() {
  const [islightTheme, setIslightTheme] = useState(false);
  const [isSeverConnection, setIsSeverConnection] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      console.log("Light")
      setIslightTheme(true)
    }

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', event => {
      setIslightTheme(event.matches ? true : false)
    });

    getServerStatus()

  }, []);

  async function getServerStatus() {
    const url = "http://localhost:8085/"

    const res = await fetch(url)
    if (res.ok) {
      setIsSeverConnection(true)
    }
  }



  return (
    <ThemeProvider theme={islightTheme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header currentTheme={islightTheme} setTheme={setIslightTheme} serverIsConected={isSeverConnection} />
      <VolumeMixerCard />
      <ShotcutsCard />
    </ThemeProvider>
  )
}

export default App
