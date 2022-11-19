import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { auth } from '../pages'

//from https://www.sitepoint.com/react-router-complete-guide/

const PrivateRoute = ( { isUser: isUser, setisUser: setisUser, component: Component } ) => {
    const location = useLocation();

    return (
        <Route>
            { isUser === true ?
                <Component isUser={isUser} setisUser={setisUser}/>
                // {Component}
            :
                <Redirect to='/login'/>
            }
        </Route>
    );
};
export default PrivateRoute;