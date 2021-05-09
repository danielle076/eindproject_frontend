import React, {useState} from 'react';
import styles from './Login.module.css';
import {Link, useHistory} from 'react-router-dom';
import app from '../../modules/firebase';

function Login() {
    const history = useHistory();
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState('');
    const [loginSuccess, toggleLoginSuccess] = useState(false);

    const onSubmit = async event => {
        setError('');
        toggleLoading('true')

        try {
            event.preventDefault();
            const [email, password] = event.target;
            const user = await app.auth().signInWithEmailAndPassword(email.value, password.value);
            console.log(user);

            toggleLoginSuccess(true);

            setTimeout(() => {
                history.push('/secret');
            }, 2000);

        } catch (error) {
            setError('Something went wrong when retrieving the data.')
            console.error(error)
        }
        toggleLoading(false);
    }

    return (
        <main className={styles.form}>
            <form onSubmit={onSubmit} className={styles.login}>
                {error && <p>{error}</p>}
                {loading && <p>Data is being loaded...</p>}

                <h1 className={styles.h1}>My Account</h1>
                <input type='email' className={styles.input} placeholder='Email'/>
                <input type='password' className={styles.input}  placeholder='Password'/>
                <input type='submit' className={styles.button} value='Login'/>

                {loginSuccess === true && <p className={styles.p}>Login succeeded! You will now go to the secret page.</p>}

                <p className={styles.p}>Don't have an account yet? Then <Link to='/register' className={styles.link}>register</Link> first.</p>
            </form>
        </main>
    );
}

export default Login;