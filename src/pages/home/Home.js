import React from 'react';
import './Home.css';
import quote from '../../assets/quote.jpg';
import home01 from '../../assets/home01.jpg';
import home02 from '../../assets/home02.jpg';
import home03 from '../../assets/home03.jpg';
import home04 from '../../assets/home04.jpg';
import home05 from '../../assets/home05.jpg';

function Home() {
    return (
        <>
            <header className='home-container'>
                <article className='article-home'>
                    <h2>Looking for a summer body?</h2>
                    <p className='p-home'>
                        There's nothing like that first day of warm weather. At first you are happy that you can finally throw off your winter sweaters, but then it hits you - the bikini season is just around the corner and you're still in fat-massaging winter hibernation mode.
                    </p>
                    <p className='p-home'>
                        Don't panic. Not only is there still plenty of time to prepare, but to get yourself beach-body ready, all it takes is a little sweat and the right nutrition.
                    </p>
                    <p className='p-home'>
                        Don't feel like you're ready for the beach body yet? No problem we are here to save you nutritionally. Whether you are vegan, vegetarian or an all-eater, we are here to save your day. All you have to do is choose food, vegetarian or vegan, fill in the calories and voilá, a morning, afternoon and evening meal on your screen.
                    </p>
                    <p className='p-home'>
                        All you have to do is click on the link of the meal to see what ingredients you need and how to prepare it. So you don't have to think about what you want and can eat, nice and relaxed!
                    </p>
                </article>

                <article className='article-home'>
                    <img className='img-home' src={quote} alt={quote}/>
                </article>
            </header>

            <section className='home-container'>
                <article className='article-home'>
                    <img className='img-homefood' src={home01} alt={home01}/>
                </article>
                <article className='article-home'>
                    <img className='img-homefood' src={home02} alt={home02}/>
                </article>
                <article className='article-home'>
                    <img className='img-homefood' src={home03} alt={home03}/>
                </article>
                <article className='article-home'>
                    <img className='img-homefood' src={home04} alt={home04}/>
                </article>
                <article className='article-home'>
                    <img className='img-homefood' src={home05} alt={home05}/>
                </article>
            </section>

            <footer className='footer-container'>
                <p>If you have questions or suggestions, <a className='home-email' href='mailto:d.vandenakker@novi-education.nl'>email</a> us.
                </p>
            </footer>
        </>
    );
}

export default Home;