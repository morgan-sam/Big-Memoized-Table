import React from 'react';
import { containerStyle, titleStyle, consoleStyle } from 'style/console';

const Console = (props) => {
	const { messages } = props;

	return (
		<div style={containerStyle}>
			<div style={titleStyle}>Console log ({messages.length}): </div>
			<div style={consoleStyle}> {messages.map((el, i) => <div key={i}>{el}</div>)}</div>
		</div>
	);
};

export default Console;
