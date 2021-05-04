import React from 'react'
import './Login.css';
import app from '../../modules/firebase'
import {Link, useHistory} from 'react-router-dom';

function Login() {
    const history = useHistory();

    const onSubmit = async event => {
        event.preventDefault();
        const [email, password] = event.target;
        const user = await app.auth().signInWithEmailAndPassword(email.value, password.value);
        console.log(user);

        setTimeout(() => {
            history.push('/food');
        }, 2000);
    }

    return (
        <main>
            <form onSubmit={onSubmit} id='loginform'>
                <h1>Login</h1>
                <input type='email' placeholder="email"/>
                <input type='password' placeholder="password"/>
                <input type='submit' value='login'/>
            </form>
            <p>Heb je nog geen account? <Link to="/register">Registreer</Link> je dan eerst.</p>
        </main>
    );
}

export default Login;