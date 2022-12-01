import { useState } from 'react';
import './styles.css';
import axios from '../../api/axios';
import {Post} from '../../components'

export default function SearchPage( ) {

	// States for registration
	const [search, setSearch] = useState('');

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	// Handling the name change
	const handleSearch = (e) => {
		setSearch(e.target.value);
		setSubmitted(false);
	};

	// // Handling the form submission
	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	if (search === '' ) {
	// 		setError(true);
	// 	} else {
	// 		setSubmitted(true);
	// 		setError(false);
	// 		console.log('search: ', search);
	// 		setSearch('');
	// 		setisSearch(true);
	// 	}
	// };

	const [posts, setPosts] = useState([])

    // const URL = "/Assignment4Backend/GetExplorePagePosts";
    // useEffect (() => {
    //     try {
    //     axios.get(URL).then((response) => {
    //         console.log(response)
    //         setPosts(response.data);
    //     })
    //     } catch (err) {
    //     console.log(err)
    //     }
    // }, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if(search === '') {
			setError(true);
			window.alert("Please enter a search term");
		} else {
			try {
				const URL = "/Assignment4Backend/GetPostByKeyWord?keyWord=" + search;
				axios.get(URL).then((response) => {
					console.log(response)
					setPosts(response.data);
					renderFeed()
				})
					
			} catch (err) {
				console.log(err.response?.status)
				// if(!err?.response) {
				// 	// setErrMsg('No Server Response')
				// } else if (err.response?.status === 400) {
				// 	// setErrMsg('Missing username or password')
				// 	setErrorMessages({ name: "e400", message: errors.e400 });
				// } else if (err.response?.status === 401) {
				// 	// setErrMsg('Unauthorized');
				// } else {
				// 	// setErrMsg('Login Failed')
				// }
				// // errRef.current.focus();
			} 
		}
	}

    const renderFeed = (
        <div>
            {
                posts.map((p, index) => {
                    return (
                        <div>
                            <Post key={index} rating={p.rating} date={p.date} name={p.name} text={p.text} image={p.image} postID={index} />
                            <br />
                        </div>
                    )
                })
            }
        </div>
    )

	// Showing error message if error is true
	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? '' : 'none',
				}}>
				<h1>Please enter all the fields</h1>
			</div>
		);
	};

	return (
		<div className="form">
			<div class="header">
				<h1> Search</h1>
			</div>

			{/* Calling to the methods */}
			<div className="messages">
				{errorMessage()}
			</div>

			<form onSubmit={handleSubmit}>
				{/* Labels and inputs for form data */}
				<div className="input-container">
                    <label> Enter a Term </label>
                    <input type="search" name="search" onChange={handleSearch} value={search} required />
                    {errorMessage()}
                </div>
				<div className="button-container">
					<input type="submit" />
				</div> 
			</form>
		</div>
	);
}
