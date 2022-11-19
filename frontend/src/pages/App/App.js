import './App.css';
import React, { useState } from 'react';
import { Switch, Route} from 'react-router-dom'
import { LoginPage, ExplorePage, SearchPage, NewPostPage, FollowingPage, MessagesPage, UserProfilePage } from '../../pages'
import { NavBar, PrivateRoute } from '../../components';
import { RegisterPage } from '../index';

export default function App() {
    const [isUser, setisUser] = useState(false)
    return (
        <div>
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
            </Route>
            <PrivateRoute exact path="/following" isUser={isUser} component={FollowingPage} />
            <PrivateRoute exact path="/newpost" isUser={isUser} component={NewPostPage} />
            <PrivateRoute exact path="/messages" isUser={isUser} component={MessagesPage} />
            <Route exact path="/register">
                <RegisterPage isUser={isUser} setisUser={setisUser}/>
            </Route>
            <PrivateRoute exact path="/userprofile" isUser={isUser} component={UserProfilePage}/>
        </Switch>
        </div>
    );
}