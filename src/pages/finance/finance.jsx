import React from "react";
import Popup from "reactjs-popup";
import "./finance.css";

const Finance = () => {
  return (
    <>
      <h2>Concetudos de Educação Financeira</h2>
      <Popup trigger={<button> 4 passos pra autônomos se organizarem e sobrar dinheiro </button>} position="right center">
        <div className=".popup-content"> 
          <ul>
            <li>1. Ganhe um salário</li>
            <li>2. Diversifique suas fontes fixas de renda</li>
            <li>3. Faça contratos </li>
            <li>4. Defina as metas da empresa</li> 
          </ul>
        </div>
      </Popup>

      <Popup trigger={<button>5 hábitos de riqueza pra adotar HOJE!</button>} position="right center">
        <div className=".popup-content"> 
        <ul>
            <li>1. Se cerque de pessoas melhores que você</li>
            <li>2.Use redes sociais pra se promover</li>
            <li>3. Leia mais livros</li>
            <li>4. Leia o noticiário TODOS OS DIAS</li> 
            <li>5. Não ligue pro que os outros falam</li>
          </ul>
        </div>
      </Popup>
      
    </>
  );
};

export default Finance;
