import React from 'react';

const Cell = (props) => {
	const { cellKey, cellVal, entryIndex, toggleCell, changeCellValue } = props;
	console.log(`Entry ${entryIndex}, ${cellKey} cell updated`);
	const booleanCell = typeof cellVal === 'boolean';

	const handleClick = () => {
		if (booleanCell) toggleCell(entryIndex, cellKey, cellVal);
		else changeCellValue(entryIndex, cellKey);
	};

	const cellStyle = {
		cursor: booleanCell ? 'pointer' : 'auto',
		textAlign: booleanCell ? 'center' : 'left'
	};

	return (
		<td className={`${cellKey} cell`} style={cellStyle} onClick={handleClick}>
			{booleanCell ? cellVal ? '✔' : '' : cellVal}
		</td>
	);
};

export default React.memo(Cell);
