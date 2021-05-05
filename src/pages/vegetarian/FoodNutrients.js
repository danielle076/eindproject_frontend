import React from 'react';
import Food from './Food';
import './FoodNutrients.css';

function FoodNutrients({mealsData}) {
    const nutrients = mealsData.nutrients;

    return (
        <main className='main-vegetarian'>
            <section className='meals-vegetarian'>
                {mealsData.meals.map((meal) => {
                    return <Food key={meal.id} meal={meal}/>
                })}
            </section>

            <section className='nutrients-vegetarian'>
                <h1 className='h1-nutrients'>The four main nutrients in these dishes</h1>
                <ul>
                    <li className='tooltip-vegetarian'>Calories: {nutrients.calories.toFixed(0)}
                        <span className='tooltiptext'>A calorie is a unit of energy.</span>
                    </li>
                    <li className='tooltip-vegetarian'>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}
                        <span className='tooltiptext'>Carbohydrates are the sugars, starches and fibers found in fruits, grains, vegetables and milk products.</span>
                    </li>
                    <li className='tooltip-vegetarian'>Fat: {nutrients.fat.toFixed(0)}
                        <span className='tooltiptext'>The body uses fat as a fuel source, and fat is the major storage form of energy in the body.</span>
                    </li>
                    <li className='tooltip-vegetarian'>Protein: {nutrients.protein.toFixed(0)}
                        <span className='tooltiptext'>Protein is a macronutrient that is essential to building muscle mass.</span>
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default FoodNutrients;