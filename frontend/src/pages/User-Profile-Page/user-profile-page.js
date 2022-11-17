import { Redirect } from 'react-router-dom';
import './styles.css';

export default function UserProfilePage( {isUser, setisUser} ) {

  const logout = (event) => {
    event.preventDefault();
    if(isUser) { setisUser(false) }
  };

  return (
    <div className="App">
      <h1>USER PROFILE</h1>
      <button onClick={logout}>Log Out</button>
      
    </div>
  );
}

const linkstyle = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '20px',
};