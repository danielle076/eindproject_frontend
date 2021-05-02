import React from 'react';
import './Home.css';
import quote from '../../assets/quote.jpg';

function Home() {

    return (
        <main-home>
            <div className="home-container">
                <article className="article-home">
                    <h2 className="product-name">Looking for a summer body?</h2>
                    <p className="p-home">
                        Er is niets lekkerder dan die eerste dag warm weer. Eerst ben je
                        blij dat je eindelijk je wintertruien van je af kunt gooien, maar dan dringt het tot je door -
                        het
                        bikiniseizoen komt er zo aan en jij zit nog steeds in de vetmasserende winterslaapstand.
                    </p>
                    <p className="p-home">
                        Geen paniek. Niet alleen is er nog genoeg tijd om je voor te bereiden, maar om jezelf beach-body
                        ready te maken is alleen een beetje zweet en de juiste voeding nodig.
                    </p>
                    <p className="p-home">
                        Heb je nog niet het gevoel dat je klaar bent voor het strandlichaam? Geen probleem wij zijn hier
                        om
                        je te redden qua voeding. Of je nu vegan, vegetarian of een alles eter bent, we are here to save
                        your day. Het enige wat
                        jij moet doen is kiezen uit food, vegetarian of vegan, je vult de calorieën in en voilá, een
                        ochtend, middag en avondmaal op je beeldscherm.
                    </p>
                    <p className="p-home">
                        Het enige wat je nu nog moet doen is op de link van de maaltijd klikken om te zien welke
                        ingrediënten je nodig hebt en hoe je hem bereid. Je hoeft zelf dus niet meer na te denken en
                        moeilijk te doen
                        over wat je wilt en kan eten, lekker relaxt!
                    </p>
                </article>

                <article className="article-home">
                    <img className="img-home" src={quote} alt={quote}/>
                </article>
            </div>
        </main-home>
    );
}

export default Home;