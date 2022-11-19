import './styles.css';
import React, { useState } from "react";
import ExplorePage from '../Explore-Page/explore-page';
import { Link, Redirect, useLocation } from "react-router-dom";


export default function LoginPage( {isUser, setisUser} ) {
    const [errorMessages, setErrorMessages] = useState({});

    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setisUser(true);
                // auth.authenticate(() => {
                //     console.log('auth', isAuthticated)
                //     setRedirectToReferrer(true);
                // });
                // if (redirectToReferrer) {
                //     return <Redirect to={from} />;
                // }
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
    );
    
    const renderForm = (
        <div className="form">
            <div class="header">
                <h1>  User Login</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                    <div class="space"></div>
                    <Link exact to="/register">
                        <button type = "register">Register</button>
                    </Link>
                </div> 
            </form>
        </div>
    );
    
    return (
        <div>
        {isUser ? <div><ExplorePage/></div> : renderForm}
        </div>
    )
}

//from https://www.sitepoint.com/react-router-complete-guide/
// export const auth = {
//     isAuthticated: false,
//     authenticate(cb) {
//         this.isAuthticated = true;
//         setTimeout(cb, 1000);

//     }
// };

