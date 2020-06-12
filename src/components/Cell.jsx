import React from 'react';

const Cell = (props) => {
	console.log('.');
	const { cellKey, cellVal, entryIndex, memoSetData } = props;
	const selectable = typeof cellVal === 'boolean';

	const handleClick = () => {
		if (selectable) memoSetData(entryIndex, cellKey, cellVal);
	};

	const cellStyle = { cursor: selectable ? 'pointer' : 'auto', textAlign: selectable ? 'center' : 'left' };

	return (
		<td style={cellStyle} onClick={handleClick}>
			{selectable ? cellVal ? '✔' : '' : cellVal}
		</td>
	);
};

export default React.memo(Cell);
