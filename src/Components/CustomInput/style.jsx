import styled from "styled-components";

export const CustomInputWrapper = styled.div`

  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0 8px 0 !important;

  & > input{
    background: none;
    border: none;
    border-bottom: 1px solid ${props => props.theme.principalColor};
    height: 32px;
    color: ${props => props.theme.textColor};
    padding: 0 8px;
    outline: none;
    
    &:placeholder-shown ~ .title{
      position: absolute;
      top: 6px;
      left: 9px;
      opacity: 50%;
      transition: 200ms ease-in-out;
      font-size: 10pt;
      margin: 0 !important;
    }
    
    &:focus{
      border-bottom: 2px solid ${props => props.theme.principalColor};
    }
  }
  
  & > .title{
    position: absolute;
    top: -14px;
    left: 4px;
    margin: 0 !important;

    font-size: 8pt;
    pointer-events: none;
    transition: 200ms ease-in-out;
    
  }

  & > .counter{
    text-align: right;
    margin-top: 4px;
    font-size: 9pt;
    opacity: 50%;
  }

`