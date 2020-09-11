import React from 'react';
import { withRouter } from "react-router-dom";
import LogOut from '../../images/signOut.png';
import { auth } from '../../config/fireconfig';

const SignOut = (props) => {
    const signOut = () => {
        auth.signOut().then(() => {
            props.history.push('/')
        }).catch(error => {
            console.log(error)
        });
    }

    return (
        <figure >
            <img
                src={LogOut}
                alt="Sair"
                onClick={signOut}
            />
        </figure >
    )
}

export default withRouter(SignOut);