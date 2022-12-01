import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from '../../api/axios';
import defaultProfilePic from '../../assets/user_smile.png' 


export default function UserProfilePage( { userID} ) {
  const [user, setUser] = React.useState();

  const logout = (event) => {
    event.preventDefault();
    if(localStorage.getItem('isUser')) { 
      console.log(userID)
      localStorage.clear();
      window.location.reload(false)
    }
  };

  // console.log(localStorage.getItem('userID'))
  const URL = "/Assignment4Backend/RegisterUser?userID=" + localStorage.getItem("userID");
  useEffect (() => {
    try {
      axios.get(URL).then((response) => {
        // console.log(response)
        setUser(response.data);
      })
    } catch (err) {
      console.log(err)
    }
  });

  const renderUserProfile = (
    <div className='user-profile-page'>
     
      <h1>welcome, {user?.name} ! ☺</h1>
      <button type="logout" onClick={logout}>Log Out</button>
      {/* <Link exact="true" to="/" onClick={logout}>Log Out</Link> */}
    </div>
  );

  return (
    <div>
      {localStorage.getItem('isUser') ? renderUserProfile : <div>LOADING</div>}
    </div>
    
  );
}

const linkstyle = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '20px',
};