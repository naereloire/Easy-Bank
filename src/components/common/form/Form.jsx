import React from 'react';
import { StyleDiv, StyleInput } from '../../../styledComponents/styledComponents';

const Form = ({ options, value, setValue }) => {
  const requireInfos = ['Nome', 'E-mail', 'Senha', 'CPF'];

  function handleRegister({ target }) {
    setValue(() => {
      return { ...value, [target.id]: target.value };
    });
  }

  const requiredField = (requireInfos, option) => {
    if (requireInfos.includes(option)) {
      return `${option}*`
    }
    else {
      return `${option}`
    }
  }

  return (
    <StyleDiv>
      {options.map((option, i) => (
        <StyleInput
          require={requireInfos.includes(option)}
          type={option === 'Senha' ? 'password' : 'text'}
          id={option}
          placeholder={requiredField(requireInfos, option)}
          onBlur={handleRegister}
        />
      ))}
    </StyleDiv>
  );
};

export default Form;
