import React, {useState} from 'react';
import './HomeVegetarian.css';
import axios from 'axios';
import FoodNutrients from './FoodNutrients';
import {ReactComponent as LoadingIcon} from '../../assets/loading.svg'

function HomeVegetarian() {
    const [food, setFood] = useState(null);
    const [calories, setCalories] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState('');

    async function foodData() {
        setError('');
        toggleLoading('true')

        try {
            const result = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}`);
            console.log('DATA RESULTS:', result.data);
            setFood(result.data);
        } catch (error) {
            setError('Oops... something went wrong. Please try again.');
            console.log('Something went wrong while retrieving the data.', error);
        }
        toggleLoading(false);
    }

    function handleChange(e) {
        setCalories(e.target.value);
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            if (disabled) {
                return;
            }
            foodData();
            setDisabled(true);
        }
    }

    return (
        <>
            {error && <p className='error-home'>{error}</p>}
            <div>
                <section className='food'>
                    <input
                        type='number'
                        placeholder='Enter calories'
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        onClick={() => {
                            foodData();
                            setDisabled(true);
                        }}
                        disabled={disabled}
                    >
                        Click for you daily meals
                    </button>
                </section>
                {loading && <LoadingIcon className='loader'/>}
                {food && <FoodNutrients mealsData={food}/>}
            </div>
        </>
    );
}

export default HomeVegetarian;