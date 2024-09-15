import styled from "styled-components";

export const DropdownWrapper = styled.div`

  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  background-color: ${props => props.theme.primaryBG};
  border: 1px solid ${props => props.theme.secondaryBG};
  border-radius: 6px;
  
  padding: 4px 10px;
  gap: 8px;
  
  cursor: pointer;
  &:hover{
    background-color: ${props => props.theme.secondaryBG};
  }
  
  & > p{
    width: 100%;
    padding: 0;
    border: 0;
    font-size: 8pt;
    font-weight: 600;
  }

  & > .hide{
    opacity: 0%; 
    display: none;
  }
  
  & > .gap{
    height: 8px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(-24px);
  }

  & > .options{

    z-index: 10;
    position: absolute;
    width: 100%;
    max-height: 106px;
    overflow-x: hidden;
    overflow-y: auto;
    transition: 100ms ease-in-out;

    bottom: 0;
    left: 0;
    transform: translateY(-32px);
    
    background-color: ${props => props.theme.primaryBG};
    border: 1px solid ${props => props.theme.secondaryBG};
    border-radius: 6px;

    & > .item{
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      padding: 6px 0;

      font-size: 9pt;
      font-weight: 600;

      &:hover{
        background-color: ${props => props.theme.secondaryBG};
      }
    }    
  }

`