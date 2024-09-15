import styled from "styled-components";


export const AddAppModalWrapper = styled.div`

  background-color: #00000060;

  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  & > .modal-wrapper{
    position: relative;
    background-color: ${props => props.theme.primaryBG};
    display: flex;
    flex-direction: column;
    width: 85vw;
    padding: 24px 32px 32px;
    border-radius: 8px;

    & > .closeBtn{
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13pt;
      border-radius: 50%;

      position: absolute;
      right: 32px;
      top: 24px;
      cursor: pointer;

      &:hover{
        background-color: ${props => props.theme.secondaryBG};
      }
    }

    & label{
      font-size: 10pt;
      margin-top: 16px;
      margin-bottom: 4px;
    }
    
    & > select{
      padding: 4px 8px;
    }

    & > .friendly-container{
      display: flex;
      flex-direction: column;
      position: relative;

      & > input{
        padding: 4px 8px;
      }
  
      & > .input-counter{
        position: absolute;
        top: 6px;
        right: 0;
        font-size: 8pt;
      }
    }
    

    & > p{
      font-size: 8pt;
      margin: 4px 0 4px 0;
      opacity: 0.6;
    }

    & > button{
      margin-top: 16px;
      padding: 12px;
      color: white;
      font-size: 10pt;
      font-weight: 500;
      border-radius: 6px;
      border: none;
      background-color: ${props => props.theme.principalColor};
      cursor: pointer;

      &:active{
        background-color: ${props => props.theme.principalColor};
        filter: brightness(.9);
      }
    }
  }
`