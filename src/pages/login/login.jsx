import React, { useState } from 'react';
import { db, auth } from '../../config/fireconfig'
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signIn = (email, password) => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log("Foi direcionado para a página home")

            })
            .catch(function (error) {
                console.log(error)
            })
    };

    const sendFormToAuth = (event) => {
        event.preventDefault();
        signIn(email, password);
    }

    return (
        <main >
            <section>
                <form>
                    <fieldset>
                        <Input type='email'
                            value={email}
                            placeholder='Digite seu e-mail'
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <Input type='password'
                            value={password}
                            placeholder='Digite sua senha'
                            onChange={
                                (event) => setPassword(event.target.value)
                            }
                        />
                        <Button
                            name='Entrar'
                            handleCLick={
                                (e) => sendFormToAuth(e)
                            }
                        />
                    </fieldset>
                </form>
                <div >
                    <p> Faça seu cadastro
                        <Link to='/register'> clicando aqui</Link>
                    </p>
                </div>
            </section>
        </main >
    )
}

export default Login
