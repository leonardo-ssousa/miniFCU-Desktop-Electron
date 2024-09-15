import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;

    /* Scroll bar */
    ::-webkit-scrollbar{
      width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: none;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  html{
    height: 100%;
  }
  
  body{
    background-color: ${props => props.theme.secondaryBG};
    height: 100%;
  }
  
  #root{
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 8px;
  }

`