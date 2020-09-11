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
background-color: #00227A;
width: 100%;
height: 100%;
margin: 0px;
line-height: 1.5;
}

main {
height: 100vh;
}
`;

const imageLogo = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
`
imageLogo.defaultProps = {
  width: '100%',
  height: 'auto'
}

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
  font-family: "Roboto", sans-serif, arial, Helvetica;

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

export const ModalDiv = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;
export const SecModal = styled.section`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DivButtons = styled.div`
  display: flex;
`;

export const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding-bottom: 10%;
  padding-top: 10%;
  margin-top: 10%;
  margin-bottom: 20%;
`;

export const DivPing = styled.div`
  width: 100%;
  height: 10px;
  background-color: #ff5691;
`;

export const TextDiv = styled.span`
  color: ${(props) => (props.color ? props.color : '50px')};
  font-size: 1.5em;
  margin-left: 0.5em;

`;

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const StyleCardBt = styled.button`
  background-color: #ffffff;
  border-radius: 10px;
  margin: 5px;
`;