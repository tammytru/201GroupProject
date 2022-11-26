import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

//from https://www.sitepoint.com/react-router-complete-guide/

const PrivateRoute = ( { isUser, setisUser, component: Component } ) => {

    return (
        <Route>
            { isUser === true ?
                <Component isUser={isUser} setisUser={setisUser}/>
            :
                <Redirect to='/login'/>
            }
        </Route>
    );
};
export default PrivateRoute;