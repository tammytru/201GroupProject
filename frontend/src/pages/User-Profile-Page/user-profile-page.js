import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './styles.css';
import axios from '../../api/axios';

export default function UserProfilePage( { isUser, setisUser, userID, setuserID } ) {
  //freeimage.host api key
  const API_KEY = "6d207e02198a847aa98d0a2a901485a5";

  const [profImg, setProfImg] = useState('')

  const logout = (event) => {
    event.preventDefault();
    console.log("logout: ", isUser)
    if(isUser) { 
      setisUser(false) 
      setuserID(-1);
    }
  };

  const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			profileImage: profImg
		}

    console.log(profImg)
		try {
			const URL = "http://freeimage.host/api/1/upload/?key=" + API_KEY + "&source="+ profImg + "&format=json"
			//+ "&profileImage=/'/'&bio=/'/'"
			const response = await axios.post(URL, data, {
				headers: {
					'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': "*",
				}
			})
			.then((response) => {
				console.log(response)
				// setuserID(response.data.userID)
			});
      // console.log('img ', profImg)


		} catch (err) {
			console.log(err.response?.status)
		}

	};

  return (
    <div className="App">
      <h1>USER PROFILE</h1>
      <button onClick={logout}>Log Out</button>
      
      <form onSubmit={handleSubmit}>
        <div className="input-container">
            <label>Image Upload</label>
            <input 
              type="file" 
              name="profImg" 
              onChange={(e) => setProfImg(e.target.value)} 
              value={profImg} 
              required
            />
        </div>
        <div className="button-container">
					<input type="submit" />
				</div>    
      </form>

    </div>
  );
}

const linkstyle = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '20px',
};