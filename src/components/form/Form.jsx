import React from 'react';

const Form = ({ options, value, setValue }) => {
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
          <input type="text" id={option} onBlur={handleRegister} />
        </label>
      ))}
    </div>
  );
};

export default Form;
