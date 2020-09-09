import React, { useState } from 'react';
import firebase from '../config/fireconfig.js';

export const Form = () => {
  const [email, setEmail] = useState(''),
    [password, setPassword] = useState('');

  const setElements = (event, callbackSet) => {
    event.preventDefault();
    callbackSet(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {});
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="EMAIL"
          onBlur={(e) => {
            setElements(e, setEmail);
          }}
        ></input>
        <input
          type="password"
          placeholder="SENHA"
          onBlur={(e) => {
            setElements(e, setPassword);
          }}
        ></input>
        <button type="submit" onClick={handleRegister} />
      </form>
    </div>
  );
};
