import styled from 'styled-components'

export const ShotcutsItemWrapper = styled.div`

  display: flex;
  flex-direction: column;
  gap: 4px;

  & > p{
    font-size: 8pt;
    font-weight: 500;
  }

  & > section{
    display: flex;
    align-items: center;
    gap: 8px;

    & > p{
      font-size: 8pt;
      font-weight: 500;
    }
  }


`

export const LedStatus = styled.div`
  opacity: ${props => props.haveled == undefined ? "0%" : "100%"};
  background-color: ${props => props.haveled ? props.theme.principalColor : props.theme.primaryBG};
  border: 1px solid ${props => props.haveled ? props.theme.principalColor : props.theme.secondaryBG};
  width: 14px;
  height: 12px;
  border-radius: 2px;
  
`