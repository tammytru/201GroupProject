import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './styles.css';
import axios from '../../api/axios';
import defaultProfilePic from '../../assets/user_smile.png' 

export default function UserProfilePage( {isUser, setisUser, userID, setuserID} ) {
  const [user, setUser] = React.useState();

  const logout = (event) => {
    event.preventDefault();
    console.log("logout: ", isUser)
    if(isUser) { 
      console.log(userID)
      setisUser(false) 
      // setuserID(-1);
    }
  };

  const URL = "/Assignment4Backend/RegisterUser?userID=" + userID;
  useEffect (() => {
    try {
      axios.get(URL).then((response) => {
        console.log(response)
        setUser(response.data);
      })
    } catch (err) {
      console.log(err)
    }
  }, []);

  const renderUserProfile = (
    <div>
      {user?.profileImage 
        ? <div>
          <img src={user?.profileImage} alt="default profile pic"/>
        </div> 
        : <div>
          <img src={defaultProfilePic} alt="default profile pic"/>
        </div>}
      <h1>WELCOME {user?.name}</h1>
      
      <button onClick={logout}>Log Out</button>
    </div>
  );

  return (
    <div className="App">

      {user ? renderUserProfile : <div>LOADING</div>}
      {/* {isUser ? <div><ExplorePage/></div> : renderForm} */}

    </div>
  );
}

const linkstyle = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '20px',
};