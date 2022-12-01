import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from '../../api/axios';
import defaultProfilePic from '../../assets/user_smile.png' 
import { Feed } from '../../components';


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
      {user?.profileImage
        ? <div>
          <img src={user?.profileImage} alt="user profile pic"/>
        </div> 
        : <div>
          <img src={defaultProfilePic} alt=" default profile pic"/>
        </div>}
      <h1>WELCOME {user?.name}</h1>
      
      <button onClick={logout}>Log Out</button>
      {/* <Link exact="true" to="/" onClick={logout}>Log Out</Link> */}
      <Feed userProfileFeed={true} />
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