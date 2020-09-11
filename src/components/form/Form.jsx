import React from 'react';
import { StyleDiv, StyleInput } from '../styledComponents/styledComponents';

const Form = ({ options, value, setValue }) => {
  const requireInfos = ['Nome', 'E-mail', 'Senha', 'CPF'];

  function handleRegister({ target }) {
    setValue(() => {
      return { ...value, [target.id]: target.value };
    });
  }
  return (
    <StyleDiv>
      {options.map((option, i) => (
        <label key={option}>
          {option}
          <StyleInput
            require={requireInfos.includes(option)}
            type={option === 'Senha' ? 'password' : 'text'}
            id={option}
            onBlur={handleRegister}
          />
          {requireInfos.includes(option) && <span>*</span>}
          <br />
        </label>
      ))}
    </StyleDiv>
  );
};

export default Form;
