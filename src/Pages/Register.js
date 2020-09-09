import React, { useState } from 'react';
import { Form } from '../Components/Form';
const obejeto = {
  email: null,
  senha: null,
};

const Register = () => {
  const [inputs, setInputs] = useState(obejeto);

  return (
    <div>
      <form>
        <input></input>
      </form>
    </div>
  );
};

export default Register;
