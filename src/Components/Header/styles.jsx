import styled from "styled-components"

export const HeaderWrapper = styled.div`

  background-color: ${props => props.theme.secondaryBG};
  //background-color: aqua;
  color: ${props => props.theme.textColor};

  display: flex;
  justify-content: space-between;
  padding: 16px;
  padding-bottom: 42px;
  position: relative;

  & > img{
    width: 96px;
    height: 32px;
  }

  & > .toggleTheme{
    background-color: ${props => props.theme.secondaryBG};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 2px;
    cursor: pointer;

    &:hover{
      background-color: ${props => props.theme.primaryBG};
    }
  }

  & > p{
    position: absolute;
    bottom: 12px;
    right: 16px;
    font-size: 9pt;
    color: ${props => props.theme.textColor};
    opacity: 70%;
  }


`