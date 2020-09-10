import React, { useState } from 'react';
// eslint-disable-next-line
import { db, auth } from '../../config/fireconfig'
import authMainErrors from './firebase-error'
import { Link, withRouter } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let [errorMsg, setErrorMsg] = useState();

    const signIn = (email, password) => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log("Foi direcionado para a página home")
                props.history.push('/home')
            })
            .catch(function (error) {
                if (authMainErrors[error.code]) {
                    setErrorMsg(authMainErrors[error.code])
                } else {
                    (setErrorMsg('Ocorreu um erro. Tente novamente'))
                }
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
                    <p>
                        <Link to='/register'> CADASTRAR-SE </Link>
                    </p>
                    <p>
                        <Link to='/register'> Esqueci a senha </Link>
                    </p>
                </div>
                <div>
                    {errorMsg ? (
                        <div>
                            {errorMsg}
                        </div>
                    ) : null
                    }
                </div>
            </section>
        </main >
    )
}

export default withRouter(Login);
