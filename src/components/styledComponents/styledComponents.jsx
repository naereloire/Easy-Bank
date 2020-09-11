import styled, { createGlobalStyle } from 'styled-components';

const colorTheme = `
background-color: #24007C;
`;

export const DivEnd = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  align-content: flex-end;
  justify-content: flex-end;
`;

export const Navtop = styled.div`
  display: flex;
  ${colorTheme}
  background-color: #24007C;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10%;
  padding-top: 10%;
  color: white;
  font-family: 'Arial';
`;

export const DivCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledNavImg = styled.img`
  width: ${(props) => (props.width ? props.width : '50px')};
  margin: 10px;
`;

export const GlobalStyle = createGlobalStyle`

html {
height: 100%;
width: 100%;
touch-action: auto;
}
body {
background-color: #D7D7D7;
height: 100%;
width: 100%;
margin: 0px;
}

main {
height: 100vh;
}
`;

const borderAndRadius = `
  border: 1px solid #A04835;
  border-radius: 5px;
`;

const displayFlexAndColumn = `
  display: flex;
  flex-direction: column;
`;

const displayFlexAndRow = `
  display: flex;
  flex-direction: row;
`;

const fontSizeAndFamily = `
  font-size: 30px;
  font-family: "helvetica";

  @media(max-width: 400px) {
    font-size: 20px;
  }
`;

const alignItemsAndJustifyCenter = `
  align-items: center;
  justify-content: center;
`;

export const StyleInput = styled.input`
  height: 70px;
  /* width: ${(props) => (props.width ? '30%' : '60%')}; */
  margin: 10px;
  font-size: 20px;
  outline: none;
  color: #a04835;
  ${borderAndRadius}
  ${displayFlexAndColumn}

  &::placeholder {
    color: #a04835;
  }

  @media (max-width: 400px) {
    height: 50px;
    width: 85%;
  }
`;

export const StyleDiv = styled.div`
  ${borderAndRadius}
  ${displayFlexAndColumn}
  width: 100%;
  /* align-items:center; */
  padding-top: 3rem;
`;

export const StyleBtn = styled.button`
  ${borderAndRadius}
  ${displayFlexAndColumn}
  height: 30px;
  width: 20%;
  margin: 5px;
  background-color: #a04835;
  color: black;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  ${alignItemsAndJustifyCenter}
`;

export const StyledSpan = styled.span`
  ${borderAndRadius}
  ${fontSizeAndFamily}
  ${displayFlexAndRow}
`;
