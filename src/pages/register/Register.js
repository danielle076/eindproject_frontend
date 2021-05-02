import React from 'react';
import './Register.css';
import {Link} from "react-router-dom";

function Register() {
    return (
        <section>
            <h1>Dit is een registreer pagina</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eligendi nihil nostrum
                omnis quia recusandae tenetur? Ad alias, architecto dolor eius, iure maxime minima
                necessitatibus quae quia ratione saepe tenetur.</p>
            <Link to="/">Ga terug naar de homepagina</Link>
        </section>
    );
}

export default Register;