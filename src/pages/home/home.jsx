import React from 'react';
import API from '../../api';
import Button from '../../components/Botton-card';

const Home = () => {
  return (
    <>
      <section>
        <p>Seu saldo é: xxxxx</p>
      </section>
      {<Button
        name='Solicitar cartão'
        value='cartão'
        handleCLick={
          (e) => {
            console.log(e.target.value)
          }} />}
    </>

  )
}

export default Home