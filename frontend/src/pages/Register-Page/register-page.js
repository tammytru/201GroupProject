import { useState } from 'react';
import './styles.css';

export default function RegisterPage() {

	// States for registration
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	// Handling the name change
	const handleFirstName = (e) => {
		setFirstName(e.target.value);
		setSubmitted(false);
	};

	const handleLastName = (e) => {
		setLastName(e.target.value);
		setSubmitted(false);
	};

	// Handling the email change
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};

	// Handling the password change
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};

	const handleUsername = (e) => {
		setUsername(e.target.value);
		setSubmitted(false);
	};

	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (firstName === '' || lastName === '' || email === '' || password === '' || username === '') {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
		}
	};

	// Showing success message
	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? '' : 'none',
				}}>
				<h1>User {username} successfully registered!!</h1>
			</div>
		);
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
				<h1>  Register</h1>
			</div>

			{/* Calling to the methods */}
			<div className="messages">
				{errorMessage()}
				{successMessage()}
			</div>

			<form>
				{/* Labels and inputs for form data */}
				<div className="input-container">
                    <label>First Name </label>
                    <input type="text" name="fname" required />
                    {errorMessage()}
                </div>
				<div className="input-container">
                    <label>Last Name </label>
                    <input type="text" name="lname" required />
                    {errorMessage()}
                </div>

				<div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {errorMessage()}
                </div>

				<div className="input-container">
                    <label>Email </label>
                    <input type="email" name="email" required />
                    {errorMessage()}
                </div>

				<div className="input-container">
                    <label>Password </label>
                    <input type="password" name="password" required />
                    {errorMessage()}
                </div>

				<div className="button-container">
					<input type="submit" />
				</div> 
			</form>
		</div>
	);
}
