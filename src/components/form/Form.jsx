import React from 'react';

const Form = ({ options, value, setValue }) => {
  const requireInfos = ['Nome', 'E-mail', 'Senha', 'CPF'];

  function handleRegister({ target }) {
    setValue(() => {
      return { ...value, [target.id]: target.value };
    });
  }
  return (
    <div>
      {options.map((option, i) => (
        <label key={option}>
          {option}
          <input
            require={requireInfos.includes(option)}
            type={option === 'Senha' ? 'password' : 'text'}
            id={option}
            onBlur={handleRegister}
          />
          {requireInfos.includes(option) && <span>*</span>}
          <br />
        </label>
      ))}
    </div>
  );
};

export default Form;
