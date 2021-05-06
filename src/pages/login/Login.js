import React, {useState} from 'react';
import './Login.css';
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

            toggleLoginSuccess(true);

            setTimeout(() => {
                history.push('/secret');
            }, 2000);

        } catch (error) {
            setError('Er is iets misgegaan bij het ophalen van de data.')
            console.error(error)
        }
        toggleLoading(false);
    }

    return (
        <main className='form-login'>
            <form onSubmit={onSubmit} className='login'>
                {error && <p>{error}</p>}
                {loading && <p>Data wordt geladen...</p>}

                <h1 className='h1-login'>My Account</h1>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input type='submit' className='button-login' value='login'/>

                {loginSuccess === true && <p className='p-login'>Inloggen is gelukt! Je gaat nu naar de geheime pagina.</p>}

                <p className='p-login'>Don't have an account yet? Then <Link to='/register' className='link-login'>register</Link> first.</p>
            </form>
        </main>
    );
}

export default Login;