import React from 'react';

const Cell = (props) => {
	console.log('.');
	const { text, entryIndex, data, setData } = props;
	const handleClick = () => {
		if (typeof text === 'boolean') {
			let newData = JSON.parse(JSON.stringify(data));
			newData[entryIndex]['active'] = !text;
			setData(newData);
		}
	};
	return <td onClick={handleClick}>{typeof text === 'boolean' ? text ? '✔' : '' : text}</td>;
};

export default Cell;
