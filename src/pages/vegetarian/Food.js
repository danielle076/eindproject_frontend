import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Food.css';

function Food({meal}) {
    const [image, setImage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchData() {
            setError('');

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`);
                console.log('FETCHDATA RESULTS:', result.data);
                setImage(result.data.image);
            } catch (error) {
                setError('Sorry, images are not loading.');
                console.log('Something went wrong while retrieving the photo.', error);
            }
        }

        fetchData();
    }, [meal.id]);

    return (
        <article className='article-vegetarian'>
            {error && <p className='error-vegetarian'>{error}</p>}
            <h1 className='title-vegetarian'>{meal.title}</h1>
            <img className='img-vegetarian' src={image} alt='food'/>
            <ul className='directions-vegetarian'>
                <li>Ready in {meal.readyInMinutes} minutes</li>
                <li>Number of servings: {meal.servings}</li>
            </ul>
            <a href={meal.sourceUrl} target='_blank' rel='noreferrer' className='link-vegetarian'>Go to the recipe</a>
        </article>
    );
}

export default Food;