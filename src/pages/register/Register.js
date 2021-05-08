import React, {useState} from 'react';
import './Register.css';
import {Link, useHistory} from 'react-router-dom';
import app from '../../modules/firebase';

function Register() {
    const history = useHistory();
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState('');
    const [registerSuccess, toggleRegisterSuccess] = useState(false);

    const onSubmit = async event => {
        setError('');
        toggleLoading('true')

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
            setError('Something went wrong when retrieving the data.')
            console.error(error)
        }
        toggleLoading(false);
    }

    return (
        <main className='form-register'>
            <form onSubmit={onSubmit} className='register'>
                {error && <p>{error}</p>}
                {loading && <p>Data is being loaded...</p>}

                <h1 className='h1-register'>Register for juicy stuff</h1>
                <input type='email' className='input-register' placeholder='Email'/>
                <input type='password' className='input-register' placeholder='Password'/>
                <input type='submit' className='button-register' value='Register'/>

                {registerSuccess === true && <p className='p-register'>Registration has succeeded! You can log in now.</p>}

                <p className='p-register'>Do you already have an account? Log in <Link to='/login' className='link-register'>here</Link>.</p>
            </form>
        </main>
    );
}

export default Register