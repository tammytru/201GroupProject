import './styles.css';
import React, { useState, useRef, useEffect } from "react";
import ExplorePage from '../Explore-Page/explore-page';
import { Link, Redirect } from "react-router-dom";
import axios from '../../api/axios';

/*
//adapted from https://www.youtube.com/watch?v=X3qyxo_UTR4&ab_channel=DaveGray
export default function LoginPage( {isUser, setisUser, userID, setuserID} ) {
    const userRef = useRef();

    // const [userID, setUserID] = useState();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState({});

    const errors = {
        username: "invalid username",
        password: "invalid password",
        e400: "there is no account with that username and password", 
    };

    useEffect(() => {
        userRef.current.focus();
    }, [isUser])
    // useEffect(() => {
    //     setErrMsg('');
    // }, [user, password])

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            userName: user,
            password: password
        }
        console.log(data)
        console.log("isuser", isUser)

        try {
            const URL = "/Assignment4Backend/VerifyLogin?userName=" + user + "&password=" + password;
            const response = await axios.post(URL,
                //JSON.stringify({userName: user, password}),
                data,
                {
                    headers: { 
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': "*",
                    },
                    // withCredentials: true
                })
                .then((response) => {
                    console.log(response)
                    setuserID(response.data.userID)
                    console.log(response.data.userID)
                    
                });
            
                if(userID != -1) {
                    setUser('')
                    setPassword('')
                    setisUser(true);
                    console.log('update isUser', isUser)
                }
                
        } catch (err) {
            console.log(err.response?.status)
            if(!err?.response) {
                // setErrMsg('No Server Response')
            } else if (err.response?.status === 400) {
                // setErrMsg('Missing username or password')
                setErrorMessages({ name: "e400", message: errors.e400 });
            } else if (err.response?.status === 401) {
                // setErrMsg('Unauthorized');
            } else {
                // setErrMsg('Login Failed')
            }
            // errRef.current.focus();
        } 

    }

    const renderForm = (
        <div className="form">
            <div className="header">
                <h1>  User Login</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="user">Username </label>
                    <input 
                        type="text" 
                        name="userName" 
                        ref={userRef} 
                        onChange={(e) => setUser(e.target.value)} 
                        value={user}
                        required 
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password </label>
                    <input 
                        type="password" 
                        name="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password}
                        required 
                    />
                </div>
                {renderErrorMessage('400')}
                <div className="button-container">
                    <input type="submit" />
                    <div className="space"></div>
                    <Link exact="true" to="/register">
                        <button type = "register">Register</button>
                    </Link>
                </div> 
            </form>
        </div>
    )

    return (
        <>
            {isUser ? ( <div><ExplorePage/></div> ) : renderForm}
        </>
    )

}
*/

export default function LoginPage( {isUser, setisUser, userID, setuserID} ) {
    const [errorMessages, setErrorMessages] = useState({});

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const errors = {
        username: "invalid username",
        password: "invalid password"
    };

    useEffect(() => {
        if(userID !== -1) {
            setUser('')
            setPassword('')
            setisUser(true);
            console.log('update isUser', isUser)
        }
    }, [userID]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            userName: user,
            password: password
        }
        console.log(data)
        console.log("isuser", isUser)

        try {
            const URL = "/Assignment4Backend/VerifyLogin?userName=" + user + "&password=" + password;
            const response = await axios.post(URL,
                //JSON.stringify({userName: user, password}),
                data,
                {
                    headers: { 
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': "*",
                    },
                    // withCredentials: true
                })
                .then((response) => {
                    console.log(response)
                    setuserID(response.data.userID)
                    console.log(response.data.userID)
                    
                });
            
                console.log(userID)
                
                
        } catch (err) {
            console.log(err.response?.status)
            if(!err?.response) {
                // setErrMsg('No Server Response')
            } else if (err.response?.status === 400) {
                // setErrMsg('Missing username or password')
                setErrorMessages({ name: "e400", message: errors.e400 });
            } else if (err.response?.status === 401) {
                // setErrMsg('Unauthorized');
            } else {
                // setErrMsg('Login Failed')
            }
            // errRef.current.focus();
        } 

        // event.preventDefault();

        // var { username, password } = document.forms[0];

        // const userData = database.find((user) => user.username === username.value);

        // if (userData) {
        //     if (userData.password !== password.value) {
        //         setErrorMessages({ name: "password", message: errors.password });
        //     } else {
        //         setisUser(true);
        //     }
        // } else {
        //     setErrorMessages({ name: "username", message: errors.username });
        // }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
    );
    
    const renderForm = (
        <div className="form">
            <div className="header">
                <h1>  User Login</h1>
            </div>
            {/* <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="username" required />
                    {renderErrorMessage("username")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="password" required />
                    {renderErrorMessage("password")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                    <div className="space"></div>
                    <Link exact to="/register">
                        <button type = "register">Register</button>
                    </Link>
                </div> 
            </form> */}
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="user">Username </label>
                    <input 
                        type="text" 
                        name="userName" 
                        onChange={(e) => setUser(e.target.value)} 
                        value={user}
                        required 
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password </label>
                    <input 
                        type="password" 
                        name="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password}
                        required 
                    />
                </div>
                {renderErrorMessage('400')}
                <div className="button-container">
                    <input type="submit" />
                    <div className="space"></div>
                    <Link exact="true" to="/register">
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


