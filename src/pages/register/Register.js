import React, {useState} from 'react';
import './Register.css';
import {Link, useHistory} from 'react-router-dom';
import app from '../../modules/firebase';

function Register() {
    const history = useHistory();
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState("");
    const [registerSuccess, toggleRegisterSuccess] = useState(false);

    const onSubmit = async event => {
        setError("");
        toggleLoading("true")

        try {
            event.preventDefault();
            const [email, password] = event.target;
            const user = await app.auth().createUserWithEmailAndPassword(email.value, password.value);
            console.log(user);
            toggleRegisterSuccess(true);
            setTimeout(() => {
                history.push('/login');
            }, 2000);
        } catch(error){
            setError("Er is iets misgegaan bij het ophalen van de data.")
            console.error(error)
        }
        toggleLoading(false);
    }

    return (
        <main className='form-register'>
            <form onSubmit={onSubmit} className='register'>
                {error && <p>{error}</p>}
                {loading && <p>Data wordt geladen...</p>}
                <h1 className="h1-register">Sign Up</h1>
                <input type='email' placeholder="email"/>
                <input type='password' placeholder="password"/>
                <input type='submit' value='Register'/>
                {registerSuccess === true && <p className="p-register">Registreren is gelukt! Je kan nu inloggen.</p>}
                <p className="p-register">Do you already have an account? Log in <Link to="/login" className="link-register">here</Link>.</p>
            </form>

        </main>
    );
}

export default Register