import './styles.css';
import React, { useState } from "react";
import { NavBar } from '../../components';
import ExplorePage from '../Explore-Page/explore-page';
import { Link } from "react-router-dom";


export default function LoginPage( {isUser, setisUser} ) {
    const [errorMessages, setErrorMessages] = useState({});
    // const [isUser, setisUser] = useState(false);

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
                    <div class="space">
                    </div>
                    <Link exact to="/register-page">
                        <button type = "register">Register</button>
                    </Link>
                </div> 
            </form>
        </div>
    );
    
    return (
        // isUser,
        // render:(
        // <div className="App">
        //     <div className="login-form">
        //         <div className="title">Sign In</div>
        //         {isUser ? 
        //             <div><NavBar/></div> 
        //         : renderForm}
        //     </div>
        // </div>
        <div>
        {isUser ? <div><ExplorePage/></div> : renderForm}
        </div>
    )
}

