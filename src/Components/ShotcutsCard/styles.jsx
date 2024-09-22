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
    row-gap: 12px;
    column-gap: 18px;
    margin-bottom: 16px;
  }

  & .modal-container{

    background-color: ${props => props.theme.primaryBG};
    padding: 32px;
    border-radius: 8px;

    position: relative;
    display: flex;
    flex-direction: column;
    width: 60vw;

    & > h2{
      margin-bottom: 24px;
    }

    


    & > button{
      margin-top: 24px;
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
      top: 32px;
      cursor: pointer;

      &:hover{
        background-color: ${props => props.theme.secondaryBG};
      }
    }
  }

`