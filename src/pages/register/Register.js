import React from 'react';
import './Register.css';
import app from '../../modules/firebase'

function Register() {
    const onSubmit = async event => {
        event.preventDefault();
        const [email, password] = event.target;
        const user = await app.auth().createUserWithEmailAndPassword(email.value, password.value);
        console.log(user);
    }

    return (
        <main>
            <form onSubmit={onSubmit} id='loginform'>
                <h1>Register</h1>
                <input type='email' placeholder="email"/>
                <input type='password' placeholder="password"/>
                <input type='submit' value='register'/>
            </form>
        </main>
    );
}

export default Register