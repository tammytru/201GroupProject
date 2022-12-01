import React, {useEffect} from 'react';
import './styles.css';
import axios from '../../api/axios';

export default function Message({ messageID }) {
  const [message, setMessage] = React.useState();

  const URL = "/Assignment4Backend/Recipe?postID=";
  useEffect (() => {
    try {
      axios.get(URL).then((response) => {
        // console.log(response)
        setMessage(response.data);
      })
    } catch (err) {
      console.log(err)
    }
  }, []);

  return (
    <div id='post-container'>
      <div className='message-details'>
        {/* message title */}
        <h6 id="message">{message?.message1}</h6>
        <div></div>
        {/* username */}
        <p id="rating">Rating: {message?.username}</p>

        {/* date */}
        <p id="date">Date Posted: {message?.date}</p>
      </div>
    </div>
  );
}

