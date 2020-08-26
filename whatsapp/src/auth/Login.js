import React from 'react'
import styles from './login.module.css';
import {Button} from '@material-ui/core'
import Whatsapp from '../assests/whatsapp.webp';
import Iris from '../assests/iris.svg';
import { auth } from '../firebase';
import { provider } from '../firebase';
import { useStateValue } from '../ReduxStuffs/StateProvider';
import { actionTypes } from '../ReduxStuffs/reducer/Reducer';
function Login() {
    const [{}, dispatch] = useStateValue();
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((res)=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: res.user,
            });
        }  
        )
        .catch(error => {
            alert(error.message)
        })
    }
    return (
        <div className={styles.login}>
            <div className={styles.login_container}>
                <img src={Iris} alt="logo"/>
                <img src={Whatsapp} alt="logo"/>
                <div className="login_text">
                    <h1>Sign-In to whatsApp Clone</h1>
                </div>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
