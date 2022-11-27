import { useState } from 'react';
import './styles.css';

export default function SearchPage( {isSearch, setisSearch} ) {

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

	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (search === '' ) {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
			console.log('search: ', search);
			setSearch('');
			setisSearch(true);
		}
	};


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
