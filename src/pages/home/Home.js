import React from 'react';
import styles from './Home.module.css';
import quote from '../../assets/quote.jpg';
import home01 from '../../assets/home01.jpg';
import home02 from '../../assets/home02.jpg';
import home03 from '../../assets/home03.jpg';
import home04 from '../../assets/home04.jpg';
import home05 from '../../assets/home05.jpg';

function Home() {
    return (
        <>
            <header className={styles.container}>
                <article className={styles.article}>
                    <h2>Looking for a summer body?</h2>
                    <p className={styles.p}>
                        There's nothing like that first day of warm weather. At first you are happy that you can finally throw off your winter sweaters, but then it hits you - the bikini season is just around the corner and you're still in fat-massaging winter hibernation mode.
                    </p>
                    <p className={styles.p}>
                        Don't panic. Not only is there still plenty of time to prepare, but to get yourself beach-body ready, all it takes is a little sweat and the right nutrition.
                    </p>
                    <p className={styles.p}>
                        Don't feel like you're ready for the beach body yet? No problem we are here to save you nutritionally. Whether you are vegan, vegetarian or an all-eater, we are here to save your day. All you have to do is choose food, vegetarian or vegan, fill in the calories and voilá, a morning, afternoon and evening meal on your screen.
                    </p>
                    <p className={styles.p}>
                        All you have to do is click on the link of the meal to see what ingredients you need and how to prepare it. So you don't have to think about what you want and can eat, nice and relaxed!
                    </p>
                </article>

                <article className={styles.article}>
                    <img className={styles.img} src={quote} alt={quote}/>
                </article>
            </header>

            <section className={styles.container}>
                <article className={styles.article}>
                    <img className={styles.homefood} src={home01} alt={home01}/>
                </article>
                <article className={styles.article}>
                    <img className={styles.homefood} src={home02} alt={home02}/>
                </article>
                <article className={styles.article}>
                    <img className={styles.homefood} src={home03} alt={home03}/>
                </article>
                <article className={styles.article}>
                    <img className={styles.homefood} src={home04} alt={home04}/>
                </article>
                <article className={styles.article}>
                    <img className={styles.homefood} src={home05} alt={home05}/>
                </article>
            </section>

            <footer className={styles.footer}>
                <p>If you have questions or suggestions, <a className={styles.email} href='mailto:d.vandenakker@novi-education.nl'>email</a> us.
                </p>
            </footer>
        </>
    );
}

export default Home;