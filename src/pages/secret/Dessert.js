import React, {useEffect, useState} from 'react';
import './Dessert.css';
import axios from 'axios';
import {ReactComponent as LoadingIcon} from "../../assets/loading.svg";

function Dessert() {
    const [food, setFood] = useState([]);
    const [error, setError] = useState('')
    const [loading, toggleLoading] = useState('');

    useEffect(() => {
        async function fetchdessert() {
            setError('');
            toggleLoading('true')

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/random?number=1&tags=dessert&apiKey=${process.env.REACT_APP_API_KEY}`);
                setFood(result.data.recipes);
            } catch (error) {
                setError('Sorry, images are not loading.');
                console.log('Something went wrong while retrieving the photo.', error);
            }
            toggleLoading(false);
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
                    <a href={foods.sourceUrl} target='_blank' rel='noreferrer'  className='link-dessert'>Go to Recipe</a>,
                ]);
            })}
            {loading && <LoadingIcon className='loader'/>}
        </article>
    );
}

export default Dessert;