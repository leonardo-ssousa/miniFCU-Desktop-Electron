import styled from "styled-components";

export const InputDropDownWrapper = styled.div`
  
  position: relative;
  width: 100%;
  cursor: pointer;
  
  & > .current-value-container{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 6px;
    
    & > input{
      font-size: 9pt;
      color: ${props => props.theme.textColor};
      width: 100%;
      height: 32px;
      padding: 0 12px;
      background: none;
      border: 1px solid ${props => props.theme.secondaryBG};
      border-radius: 6px;
      cursor: pointer;
      
      &:focus{
        cursor: text;
        outline: none;
      }
      
      &:focus ~ .chevron-icon{
        transform: rotate(-180deg);
        transition: 300ms ease-in-out;
      }
    }
    
    & > .alert{
      border: 1px solid ${props => props.theme.alert};
    }

    & > .chevron-icon{
      position: absolute;
      right: 8px;
      pointer-events: none;
    }
  }
  
  & > .options-container{
    
    position: absolute;
    left: 0;
    bottom: 40px;
    width: 100%;

    max-height: 256px;
 
    font-size: 10pt;
    overflow-y: scroll;
    border-radius: 6px;
    background-color: ${props => props.theme.secondaryBG};
    
    & > p{
      padding: 8px 12px;
      
      &:hover{
        cursor: pointer;
        background-color: ${props => props.theme.primaryBG};
      }
    }
  }

  & > .hide{
    animation: hideAnim 80ms ease-out forwards;
  }

  @keyframes hideAnim {
    0% {
      display: block;
      transform: translateY(0);
      opacity: 100%;
    }

    50% {
      display: block;
      transform: translateY(10px);
      opacity: 50%;
    }

    99% {
      display: block;
      transform: translateY(20px);
      opacity: 0%;
    }

    100% {
      display: none;
      transform: translateY(20px);
      opacity: 0%;
    }
  }
`