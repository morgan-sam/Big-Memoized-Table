import React from 'react';

const Cell = (props) => {
	const { cellKey, cellVal, entryIndex, toggleCell } = props;
	console.log(`Entry ${entryIndex}, ${cellKey} cell updated`);
	const selectable = typeof cellVal === 'boolean';

	const handleClick = () => {
		if (selectable) toggleCell(entryIndex, cellKey, cellVal);
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
