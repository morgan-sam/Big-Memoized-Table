import React from 'react';

const Cell = (props) => {
	console.log('.');
	const { cellKey, cellVal, entryIndex, data, setData } = props;
	const selectable = typeof cellVal === 'boolean';

	const handleClick = () => {
		if (selectable) {
			let newData = JSON.parse(JSON.stringify(data));
			newData[entryIndex][cellKey] = !cellVal;
			setData(newData);
		}
	};

	const cellStyle = { cursor: selectable ? 'pointer' : 'auto', textAlign: selectable ? 'center' : 'left' };

	return (
		<td style={cellStyle} onClick={handleClick}>
			{selectable ? cellVal ? '✔' : '' : cellVal}
		</td>
	);
};

export default Cell;
