import styled from "styled-components";

export const VolumeMixerCardWrapper = styled.div`

  background-color: ${props => props.theme.primaryBG};
  border-radius: 4px;
  padding: 18px 24px;
  box-shadow: 0px 0px 7px ${props => props.theme.shadow};
  margin: 0 8px;

  display: flex;
  flex-direction: column;
  gap: 12px;
  color: ${props => props.theme.textColor};

  flex-grow: 1;

  & > .card-header{
    & > h1{
      font-size: 14pt;
      padding-bottom: 12px;
    }
  }

  & > .card-content{
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;

    & > header{
      display: flex;
      justify-content: space-between;
      align-items: center;

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

    & > .itens-container{
      //background-color: aqua;
      overflow-x: auto;
      height: 230px;
      flex-grow: 1;
    }
  }

`