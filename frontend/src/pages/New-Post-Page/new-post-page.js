import './styles.css';
import { useState } from 'react';
import cuisineList from '../../assets/cuisines.json';

export default function NewPostPage( props ) {
    // states for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

    // state input variables
    const { content } = props;
    const [recipeName, setRecipeName] = useState('');
    const [caption, setCaption] = useState('');
    const [prepTime, setPrepTime] = useState(0);
    const [difficulty, setDifficulty] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [link, setLink] = useState('');

    // handle form submission
    const handleSubmit = (e) => {
		e.preventDefault();
		if (recipeName === '' || caption === '' || prepTime === '' || difficulty === '' || cuisine === '') {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
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

    // change handlers
    const handleRecipeName = (e) => {
		setRecipeName(e.target.value);
		setSubmitted(false);
	};
    const handleCaption = (e) => {
		setCaption(e.target.value);
		setSubmitted(false);
	};
    const handlePrepTime = (e) => {
		setPrepTime(e.target.value);
		setSubmitted(false);
	};
    const handleDifficulty = (e) => {
		setDifficulty(e.target.value);
		setSubmitted(false);
	};
    const handleCuisine = (e) => {
		setCuisine(e.target.value);
		setSubmitted(false);
	};
    const handleLink = (e) => {
		setLink(e.target.value);
		setSubmitted(false);
	};
    
    return (
        <div className="App">
            <h1>Create a New Post</h1>

            <form onSubmit={handleSubmit}>


                <div className="input-container">
                    <label>Recipe Name </label>
                    <input type="text" name="recipeName" onChange={handleRecipeName} value={recipeName} required />
                    {errorMessage()}
                </div>
                <div className="input-container">
                    <label>Caption </label>
                    <textarea type="text" name="caption" onChange={handleCaption} value={caption} cols={50} rows={4} required />
                    {errorMessage()}
                </div>
                <div className="input-container">
                    <label>Image Upload</label>
                    <input type="file" id="recipePhoto" name="recipePicture" required />
                </div>
                <div className="input-container">
                    <label>Prep Time </label>
                    <input type="number" name="prepTime" onChange={handlePrepTime} value={prepTime} required />
                    <select name="timeUnit" id="prepTime_dropdown">
                        <option value="minutes">Minutes</option>
                        <option value="hours">Hours</option>
                    </select>
                    {errorMessage()}
                </div>
                <div className="input-container">
                    <label>Difficulty </label>
                    <select name="timeUnit" id="difficulty_dropdown">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    {errorMessage()}
                </div>
                <div className="input-container">
                    <label>Cuisine </label>
                    <select name="cuisine" id="cuisine_dropdown">
                        {cuisineList.map( content => {
                            return (
                                <option value={content.cuisine}>{content.cuisine}</option>
                            )
                        })}
                    </select>
                    {errorMessage()}
                </div>
                <div className="button-container">
					<input type="submit" />
				</div>     
            </form>
        </div>
    );

    
}

