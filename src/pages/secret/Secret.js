import React from 'react';
import './Secret.css';
import Dessert from "./Dessert";

function Secret() {
    return (
        <div className="secret-container">
            <article className="article-secret">
            <h1 className="h1-secret">Welkom op jouw cheat-pagina</h1>
            <h2 className="h2-secret">Even helemaal klaar met het houden aan de sport en calorieën regeltjes? Welkom op de pagina vol met
                gerechten die eigenlijk
                niet mogen.</h2>
            <p className="h2-p">Elke dag letten op je calorieën, elke dag sporten... je wordt er soms moe van en vaak kun je het niet
                lang volhouden. Daarom speciaal voor jou hebben wij een aantal lekkernijen verzameld, waarbij wij expres
                de calorieën niet vermeld hebben. Want zeg nou zelf, en cheat-day zonder dat je weet dat het slecht voor
                je is smaakt een stuk lekkerder dan weten dat het niet goed voor je is.</p>
            <p className="h2-p">Geen zorgen dat dit je zomerlichaam zal beïnvloeden. Af en toe jezelf verwennen mag gerust. We leggen wel
                de nadruk op af en toe 😉 </p>

            <div className="secret">
                <Dessert/>
                <Dessert/>
                <Dessert/>
            </div>
            </article>
        </div>
    );
}

export default Secret;