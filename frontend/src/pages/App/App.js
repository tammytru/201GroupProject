import './App.css';
import React, { useState } from 'react';
import { Switch, Route, useNavigate } from 'react-router-dom'
import { LoginPage, ExplorePage, SearchPage, NewPostPage, FollowingPage, MessagesPage, UserProfilePage } from '../../pages'
import { NavBar } from '../../components';
import { RegisterPage } from '../index';

export default function App() {
    const user = false; //pass in user prop here. check if person is a real user and display proper navbar depending on that
    // const {render, isUser} = LoginPage();
    const [isUser, setisUser] = useState(false)
    console.log(isUser)
    return (
        <div>
        {/* <h1>MY APP</h1> */}
        <NavBar isUser={isUser}></NavBar>
        

        <Switch>
            <Route exact path="/">
                <ExplorePage/>
            </Route>
            <Route exact path="/search">
                <SearchPage/>
            </Route>
            <Route exact path="/login">
                <LoginPage isUser={isUser} setisUser={setisUser}/>
                {/* {render} */}
            </Route>
            <Route exact path="/following">
                <FollowingPage/>
            </Route>
            <Route exact path="/newpost">
                <NewPostPage/>
            </Route>
            <Route exact path="/messages">
                <MessagesPage/>
            </Route>
            <Route exact path="/register">
                <RegisterPage/>
            </Route>
            <Route exact path="/userprofile">
                <UserProfilePage isUser={isUser} setisUser={setisUser}/>
            </Route>
        </Switch>
        </div>
    );
}