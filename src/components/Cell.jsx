import React from 'react';

const Cell = (props) => {
	const { cellKey, cellVal, entryIndex, memoSetData } = props;
	// console.log(`${entryIndex} ${cellKey}`);
	const selectable = typeof cellVal === 'boolean';

	const handleClick = () => {
		if (selectable) memoSetData(entryIndex, cellKey, cellVal);
	};

	const cellStyle = {
		cursor: selectable ? 'pointer' : 'auto',
		textAlign: selectable ? 'center' : 'left'
	};

	return (
		<td className={`${cellKey} cell`} style={cellStyle} onClick={handleClick}>
			{selectable ? cellVal ? '✔' : '' : cellVal}
		</td>
	);
};

export default React.memo(Cell);
