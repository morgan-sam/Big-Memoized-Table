import React from 'react';

const Cell = (props) => {
	const { text } = props;
	return <td>{typeof text === 'boolean' ? text ? '✔' : '' : text}</td>;
};

export default Cell;
