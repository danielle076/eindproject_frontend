import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";

function Home() {
    return (
        <section>
            <h1>Dit is een home pagina</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eligendi nihil nostrum
                omnis quia recusandae tenetur? Ad alias, architecto dolor eius, iure maxime minima
                necessitatibus quae quia ratione saepe tenetur.</p>
            <Link to="/">Ga terug naar de homepagina</Link>
        </section>
    );
}

export default Home;