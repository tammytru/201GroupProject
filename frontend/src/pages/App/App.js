import './App.css';
import React from 'react';
import { Switch, Route, useNavigate } from 'react-router-dom'
import { LoginPage, ExplorePage, SearchPage } from '../../pages'
import { NavBar } from '../../components';

export default function App() {

    return (
        <div>
        {/* <h1>MY APP</h1> */}
        <NavBar></NavBar>
        <Switch>
            <Route exact path="/">
                <ExplorePage/>
            </Route>
            <Route exact path="/search">
                <SearchPage/>
            </Route>
            <Route exact path="/login">
                <LoginPage/>
            </Route>
        </Switch>
        </div>
    );
}