import React from 'react';

const Console = (props) => {
	const { messages, CONSOLE_WIDTH_REM } = props;

	const containerStyle = {
		width: `${props.CONSOLE_WIDTH_REM}rem`,
		height: '100%',
		boxSizing: 'border-box',
		overflowX: 'hidden',
		overflowY: 'scroll',
		border: '1px solid black'
	};

	const titleStyle = {
		fontSize: '1.2rem',
		padding: '1rem',
		textDecoration: 'underline'
	};

	const consoleStyle = {
		boxSizing: 'border-box',
		width: 'inherit',
		margin: '1rem'
	};

	return (
		<div style={containerStyle}>
			<div style={titleStyle}>Console log ({messages.length}): </div>
			<div style={consoleStyle}> {messages.map((el, i) => <div key={i}>{el}</div>)}</div>
		</div>
	);
};

export default Console;
