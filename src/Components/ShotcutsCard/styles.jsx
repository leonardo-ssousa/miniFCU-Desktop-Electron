import styled from "styled-components";

export const ShotcutsCardWrapper = styled.div`

  background-color: ${props => props.theme.primaryBG};
  border-radius: 4px;
  box-shadow: 0px 0px 7px ${props => props.theme.shadow};
  
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 18px 24px;
  margin: 0 8px;
  color: ${props => props.theme.textColor};

  & > .card-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding-bottom: 12px;

    & > h1{
      font-size: 14pt;
      flex-grow: 1;
    }

    & > .drop{
      width: 100px;
    }

    & > .add-btn{
        background-color: ${props => props.theme.principalColor};
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        color: white;
        border-radius: 6px;
        cursor: pointer;

        &:hover{
          opacity: 90%;
        }
      }
  }

  & > .card-content{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
    margin-bottom: 16px;
  }

`