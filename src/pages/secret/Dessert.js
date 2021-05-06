import React, {useEffect, useState} from 'react';
import './Dessert.css';
import axios from 'axios';

function Dessert() {
    const [food, setFood] = useState([]);
    const [error, setError] = useState('')

    useEffect(() => {
        async function fetchdessert() {
            setError('');

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/random?number=1&tags=dessert&apiKey=${process.env.REACT_APP_API_KEY}`);
                console.log('DATA RESULTS DESSERT:', result.data.recipes);
                setFood(result.data.recipes);
            } catch (error) {
                setError('Sorry, images are not loading.');
                console.log('Something went wrong while retrieving the photo.', error);
            }
        }

        fetchdessert();
    }, []);

    return (
        <article className='article-dessert'>
            {error && <p className='error-dessert'>{error}</p>}

            {food && food.map((foods) => {
                return ([
                    <h2 key={foods.title} className='h2-dessert'>{foods.title}</h2>,
                    <img src={foods.image} alt='food' className='img-dessert' key={foods.id}/>,
                    <a href={foods.sourceUrl} className='link-dessert'>Go to Recipe</a>,
                ])
            })}
        </article>
    );
}

export default Dessert;