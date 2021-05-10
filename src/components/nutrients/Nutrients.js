import React from 'react';
import Food from '../../components/food/Food'
import styles from './Nutrients.module.css';

function Nutrients({mealsData}) {
    const nutrients = mealsData.nutrients;

    return (
        <main className={styles.main}>
            <section className={styles.meals}>
                {mealsData.meals.map((meal) => {
                    return <Food key={meal.id} meal={meal}/>
                })}
            </section>

            <section className={styles.nutrients}>
                <h1 className={styles.h1}>The four main nutrients in these dishes</h1>
                <ul>
                    <li className={styles.tooltip}>Calories: {nutrients.calories.toFixed(0)}
                        <span className={styles.tooltiptext}>A calorie is a unit of energy.</span>
                    </li>
                    <li className={styles.tooltip}>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}
                        <span className={styles.tooltiptext}>Carbohydrates are the sugars, starches and fibers found in fruits, grains, vegetables and milk products.</span>
                    </li>
                    <li className={styles.tooltip}>Fat: {nutrients.fat.toFixed(0)}
                        <span className={styles.tooltiptext}>The body uses fat as a fuel source, and fat is the major storage form of energy in the body.</span>
                    </li>
                    <li className={styles.tooltip}>Protein: {nutrients.protein.toFixed(0)}
                        <span className={styles.tooltiptext}>Protein is a macronutrient that is essential to building muscle mass.</span>
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default Nutrients;