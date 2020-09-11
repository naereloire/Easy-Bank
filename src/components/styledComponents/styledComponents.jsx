import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    height: 100%;
    width: 100%;
    touch-action: auto;
  }

  body {
    background-color: #FED08F;
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
  width: ${(props) => (props.width ? '30%' : '60%')};
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
`;

export const StyleBtn = styled.button`
  ${borderAndRadius}
  ${displayFlexAndColumn}
  height: 50px;
  width: ${(props) => (props.width ? '70%' : '20%')};
  margin: 5px;
  background-color: #a04835;
  color: black;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const StyledSpan = styled.span`
  ${borderAndRadius}
  ${alignItemsAndJustifyCenter}
  ${fontSizeAndFamily}
  ${displayFlexAndRow}
`;
