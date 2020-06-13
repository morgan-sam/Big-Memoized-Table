import React from 'react';

const Tutorial = (props) => {
	const { tutorialScreen, setTutorialScreen } = props;

	const slides = [
		{
			text: [
				`This webpage demonstrates the performance enhancement of memoizing large arrays of data.`,
				`It features an example database of user information using the randomuser.me API.`
			]
		},
		{
			text: [
				`Any data entry can be changed by simply clicking on the cell.`,
				`For example clicking a cell containing the value "Male" will change the value to "Female", clicking a name will change the value to another random name, etc.`
			]
		},
		{
			text: [
				`As a cell value changes an update message will log to the console on the right.`,
				`Memoization is on by default. Turn it off with the button at the top. Now click another cell to update it's value.`,
				`You should see that every single cell on the table updated when using the non memoized function.`
			]
		},
		{
			text: [
				`With a small data set, the speed difference is neglible and so the unnecessary component rerenders are not a massive issue.`,
				`Change the size of the data set to a higher value, and try updating a cell with memoization and without memoization for each.`,
				`With the larger sized tables the lag will become so significant it will cause the window to freeze for several seconds.`
			]
		},
		{ text: 'DEFAULT TEXT' }
	];

	const tutorialBoxStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
		backgroundColor: 'white',
		padding: '2rem',
		border: '1px solid black',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		borderRadius: '1rem',
		width: '30rem'
	};

	const pageTextStyle = {
		padding: '1rem 2rem 2rem 2rem'
	};

	const pageNumberStyle = {
		padding: '2rem'
	};

	const closeButtonStyle = {
		position: 'absolute',
		top: '1rem',
		right: '1rem',
		height: '1.5rem',
		width: '1.5rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ff726f',
		border: '1px solid #ddd',
		color: 'white'
	};

	const previousPage = () => {
		const newPage = tutorialScreen - 1;
		if (newPage < 1) setTutorialScreen(slides.length);
		else setTutorialScreen(newPage);
	};
	const nextPage = () => {
		const newPage = tutorialScreen + 1;
		if (newPage > slides.length) setTutorialScreen(1);
		else setTutorialScreen(newPage);
	};

	const generateParagraphText = () => {
		const text = slides[tutorialScreen - 1].text;
		if (Array.isArray(text)) return text.map((text) => <p>{text}</p>);
		else return <p>{text}</p>;
	};

	return (
		<div style={tutorialBoxStyle}>
			<div style={pageTextStyle}>{generateParagraphText()}</div>
			<div>
				<button onClick={previousPage}>Previous</button>
				<span style={pageNumberStyle}>
					Page {tutorialScreen}/{slides.length}
				</span>
				<button onClick={nextPage}>Next</button>
			</div>
			<button style={closeButtonStyle} onClick={() => setTutorialScreen(0)}>
				X
			</button>
		</div>
	);
};

export default Tutorial;
