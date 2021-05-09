import React from 'react';
import styles from './App.module.css';
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
                        <NavLink to='/' exact activeClassName={styles['active-link']}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/food' activeClassName={styles['active-link']}>Food</NavLink>
                    </li>
                    <li>
                        <NavLink to='/vegetarian' activeClassName={styles['active-link']}>Vegetarian</NavLink>
                    </li>
                    <li>
                        <NavLink to='/vegan' activeClassName={styles['active-link']}>Vegan</NavLink>
                    </li>
                    <li className={styles.right}>
                        <NavLink to='/login' activeClassName={styles['active-link']}>Login</NavLink>
                    </li>
                    <li className={styles.right}>
                        <NavLink to='/register' activeClassName={styles['active-link']}>Register</NavLink>
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