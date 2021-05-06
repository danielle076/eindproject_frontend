import React from 'react';
import './App.css';
import {
    Switch,
    Route,
    NavLink
} from 'react-router-dom';
import Home from './pages/home/Home';
import HomeFood from './pages/food/HomeFood';
import HomeVegetarian from './pages/vegetarian/HomeVegetarian';
import HomeVegan from './pages/vegan/HomeVegan';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Secret from './pages/secret/Secret';

function App() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active-link'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/food' activeClassName='active-link'>Food</NavLink>
                    </li>
                    <li>
                        <NavLink to='/vegetarian' activeClassName='active-link'>Vegetarian</NavLink>
                    </li>
                    <li>
                        <NavLink to='/vegan' activeClassName='active-link'>Vegan</NavLink>
                    </li>
                    <li className='right'>
                        <NavLink to='/login' activeClassName='active-link'>Login</NavLink>
                    </li>
                    <li className='right'>
                        <NavLink to='/register' activeClassName='active-link'>Register</NavLink>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/food'>
                    <HomeFood/>
                </Route>
                <Route path='/vegetarian'>
                    <HomeVegetarian/>
                </Route>
                <Route path='/vegan'>
                    <HomeVegan/>
                </Route>
                <Route path='/login'>
                    <Login/>
                </Route>
                <Route path='/register'>
                    <Register/>
                </Route>
                <Route path='/secret'>
                    <Secret/>
                </Route>
            </Switch>
        </>
    );
}

export default App;