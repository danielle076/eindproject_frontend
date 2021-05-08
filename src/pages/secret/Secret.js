import React from 'react';
import './Secret.css';
import Dessert from './Dessert';
import quote from '../../assets/cheat-quote.jpg';

function Secret() {
    return (
        <>
            <main className='secret-container'>
                <article className='article-secret'>
                    <h1 className='h1-secret'>Welcome to your cheat page 🧁</h1>
                    <h2 className='h2-secret'>Just completely done with sticking to the sports and calorie rules? Welcome to the page full of dishes that actually should not be allowed.</h2>
                    <p className='h2-p'>Watching your calories every day, exercising every day.... Sometimes you get tired and often you can't keep it up for long. Therefore, especially for you, we have collected a number of treats, where we explicitly did not mention the calories. Because say it yourself, a cheat-day without knowing it's bad for you, tastes a lot better than knowing it's not good for you.</p>
                    <p className='h2-p'>No worries that this will affect your summer body. Treating yourself once in a while is allowed. We do emphasize once in a while 😉 </p>
                </article>

                <article className='article-secret'>
                    <img className='img-secret' src={quote} alt={quote}/>
                </article>
            </main>

            <section className='secret-container'>
                <Dessert/>
                <Dessert/>
                <Dessert/>
            </section>
        </>
    );
}

export default Secret;