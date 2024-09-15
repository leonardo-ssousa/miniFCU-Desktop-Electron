import styled from "styled-components";

export const VolumeItemWrapper = styled.div`


display: flex;
align-items: center;
padding: 12px 8px;
gap: 12px;
//border-top: 1px solid ${props => props.theme.secondaryBG};
border-bottom: 1px solid ${props => props.theme.secondaryBG};

& > .item-id{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
    font-size: 12pt;
    font-weight: 500;
  }
  
  & > .item-name{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    gap: 0;
    
    & > .process-name{
      display: flex;
      gap: 2px;
      font-size: 8pt;
    }
    
    & > .friendly-name{
      font-size: 14pt;
      font-weight: 600;
    }
  }
  
  & > .item-volume{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;    
    text-align: end;

    & > .value{
        width: 26px;
      }
  }
  
  & > .option-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    font-size: 10pt;
    border-radius: 6px;
    cursor: pointer;

    &:hover{
      background-color: ${props => props.theme.secondaryBG};
      
    }
  }
`