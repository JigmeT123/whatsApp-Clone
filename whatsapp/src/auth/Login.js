import React from 'react'
import styles from './login.module.css';
import {Button} from '@material-ui/core'
import Whatsapp from '../assests/whatsapp.webp';
import { auth } from '../firebase';
import { provider } from '../firebase';
function Login() {
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(res => console.log(res))
        .catch(error => {
            alert(error.message)
        })
    }
    return (
        <div className={styles.login}>
            <div className={styles.login_container}>
                <img src={Whatsapp} alt="logo"/>
                <div className="login_text">
                    <h1>Signin to whatsapp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
