import React, {useEffect} from 'react';
import './styles.css';
import axios from '../../api/axios';

export default function Post({ postID, image, date, rating, name, text }) {
  const [post, setPost] = React.useState();

  return (
    <div id='post-container'>
      {/* image */}
        {image
        ? <div>
          <img src={image} alt="food image" className='post-image'/>
        </div> 
        : <div>
          <p>IMAGE HERE</p>
        </div>}

      <div className='post-details'>
        {/* recipe title */}
        <h3 id="post-title">{name}</h3>

        {/* rating */}
        <p id="rating">Rating: {rating}</p>
        <form >
          {/* rating functionality here */}
        </form>

        {/* date */}
        <p id="date">Date Posted: {date}</p>

        {/* recipe caption / instructions */}
        <p id="post-caption">{text}</p>

      </div>
    </div>
  );
}

