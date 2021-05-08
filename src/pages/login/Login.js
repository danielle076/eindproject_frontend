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
        <main className='form-login'>
            <form onSubmit={onSubmit} className='login'>
                {error && <p>{error}</p>}
                {loading && <p>Data is being loaded...</p>}

                <h1 className='h1-login'>My Account</h1>
                <input type='email' className='input-login' placeholder='Email'/>
                <input type='password' className='input-login' placeholder='Password'/>
                <input type='submit' className='button-login' value='Login'/>

                {loginSuccess === true && <p className='p-login'>Login succeeded! You will now go to the secret page.</p>}

                <p className='p-login'>Don't have an account yet? Then <Link to='/register' className='link-login'>register</Link> first.</p>
            </form>
        </main>
    );
}

export default Login;