import React from 'react';

const Demo = (props) => {
	const { demoScreen, setDemoScreen } = props;

	const demoes = [
		{ text: 'This webpage demonstrates the performance enhancement of memoizing large arrays of data.' },
		{ text: 'DEFAULT TEXT' },
		{ text: 'DEFAULT TEXT' },
		{ text: 'DEFAULT TEXT' },
		{ text: 'DEFAULT TEXT' }
	];

	const demoBoxStyle = {
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
		borderRadius: '1rem'
	};

	const pageTextStyle = {
		padding: '2rem'
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
		const newPage = demoScreen - 1;
		if (newPage < 1) setDemoScreen(demoes.length);
		else setDemoScreen(newPage);
	};
	const nextPage = () => {
		const newPage = demoScreen + 1;
		if (newPage > demoes.length) setDemoScreen(1);
		else setDemoScreen(newPage);
	};

	return (
		<div style={demoBoxStyle}>
			<p style={pageTextStyle}>{demoes[demoScreen - 1].text}</p>
			<div>
				<button onClick={previousPage}>Previous</button>
				<span style={pageNumberStyle}>
					Page {demoScreen}/{demoes.length}
				</span>
				<button onClick={nextPage}>Next</button>
			</div>
			<button style={closeButtonStyle} onClick={() => setDemoScreen(0)}>
				X
			</button>
		</div>
	);
};

export default Demo;
