import styled from "styled-components";

export const InputDropDownWrapper = styled.div`
  
  position: relative;
  width: 100%;
  border: 1px solid ${props => props.theme.secondaryBG};
  border-radius: 6px;
  padding: 6px 12px;
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
      background: none;
      border: none;
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
    display: none;
  }
`