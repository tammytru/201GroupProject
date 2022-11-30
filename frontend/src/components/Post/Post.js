import React, {useEffect} from 'react';
import './styles.css';
import axios from '../../api/axios';

export default function Post({ postID }) {
  const [post, setPost] = React.useState();

  const URL = "/Assignment4Backend/Recipe?postID=" + postID;
  useEffect (() => {
    try {
      axios.get(URL).then((response) => {
        console.log(response)
        setPost(response.data);
      })
    } catch (err) {
      console.log(err)
    }
  }, []);


  // const renderUserProfile = (
  //   <div>
      // {user?.profileImage
      //   ? <div>
      //     <img src={user?.profileImage} alt="user profile pic"/>
      //   </div> 
      //   : <div>
      //     <img src={defaultProfilePic} alt=" default profile pic"/>
      //   </div>}
  //     <h1>WELCOME {user?.name}</h1>
      
  //     <button onClick={logout}>Log Out</button>
  //     {/* <Link exact="true" to="/" onClick={logout}>Log Out</Link> */}
  //   </div>
  // );

  return (
    <div id='post-container'>
      {/* image */}
        {post?.image
        ? <div>
          <img src={post?.image} alt="food image" className='post-image'/>
        </div> 
        : <div>
          {/* <img src={defaultProfilePic} alt=" default profile pic" className='post-image'/> */}
          <p>IMAGE HERE</p>
        </div>}

      <div className='post-details'>
        {/* recipe title */}
        <h3 id="post-title">{post?.name}</h3>

        {/* rating */}
        <p id="rating">Rating: {post?.rating}</p>
        <form >
          {/* rating functionality here */}
        </form>

        {/* date */}
        <p id="date">Date Posted: {post?.date}</p>

        {/* recipe caption / instructions */}
        <p id="post-caption">{post?.text}</p>

      </div>
    </div>
  );
}

