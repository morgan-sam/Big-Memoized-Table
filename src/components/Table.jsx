import React, { useState, useEffect, useCallback } from 'react';
import Cell from 'components/Cell';
import Spinner from 'components/Spinner';
import { capitaliseEachWord } from 'process/utility';

const headings = [
	'index',
	'first name',
	'last name',
	'gender',
	'age',
	'address',
	'country',
	'email',
	'phone',
	'mobile',
	'active',
	'premium'
];

const Table = (props) => {
	const { data, setData, memoization, loading, setLoading, getSingleValue } = props;
	const [ tableEntries, setTableEntries ] = useState([]);

	// Non-memoized Functions //

	const nonMemoToggleCell = (entryIndex, cellKey, cellVal) => {
		let newData = JSON.parse(JSON.stringify(data));
		newData[entryIndex][cellKey] = !cellVal;
		setData(newData);
	};

	const nonMemoToggleGenderCell = (entryIndex, cellVal) => {
		let newData = JSON.parse(JSON.stringify(data));
		const newGender = cellVal === 'Male' ? 'Female' : 'Male';
		newData[entryIndex]['gender'] = newGender;
		setData(newData);
	};

	const nonMemoChangeAgeCell = (entryIndex) => {
		let newData = JSON.parse(JSON.stringify(data));
		const newAge = Math.round(Math.random() * (99 - 18) + 18);
		newData[entryIndex]['age'] = newAge;
		setData(newData);
	};

	const nonMemoChangeCellValue = async (entryIndex, cellKey) => {
		let newData = JSON.parse(JSON.stringify(data));
		const newValue = await getSingleValue(cellKey);
		newData[entryIndex][cellKey] = newValue;
		setData(newData);
	};

	// Memoized Functions //

	const memoToggleCell = useCallback((entryIndex, cellKey, cellVal) => {
		setData((data) => {
			let newData = JSON.parse(JSON.stringify(data));
			newData[entryIndex][cellKey] = !cellVal;
			return newData;
		});
	}, []);

	const memoToggleGenderCell = useCallback((entryIndex, cellVal) => {
		setData((data) => {
			let newData = JSON.parse(JSON.stringify(data));
			const newGender = cellVal === 'Male' ? 'Female' : 'Male';
			newData[entryIndex]['gender'] = newGender;
			return newData;
		});
	}, []);

	const memoChangeAgeCell = useCallback((entryIndex) => {
		setData((data) => {
			let newData = JSON.parse(JSON.stringify(data));
			const newAge = Math.round(Math.random() * (99 - 18) + 18);
			newData[entryIndex]['age'] = newAge;
			return newData;
		});
	}, []);

	const memoChangeCellValue = useCallback(async (entryIndex, cellKey) => {
		const newValue = await getSingleValue(cellKey);
		setData((data) => {
			let newData = JSON.parse(JSON.stringify(data));
			newData[entryIndex][cellKey] = newValue;
			return newData;
		});
	}, []);

	////////////////////////

	useEffect(
		() => {
			const entries = data.map((entry, i) => {
				return (
					<tr key={i}>
						{Object.entries(entry).map(([ key, value ], i) => (
							<Cell
								toggleBooleanCell={memoization ? memoToggleCell : nonMemoToggleCell}
								toggleGenderCell={memoization ? memoToggleGenderCell : nonMemoToggleGenderCell}
								changeAgeCell={memoization ? memoChangeAgeCell : nonMemoChangeAgeCell}
								changeCellValue={memoization ? memoChangeCellValue : nonMemoChangeCellValue}
								cellKey={key}
								cellVal={value}
								entryIndex={entry.index}
								key={i}
							/>
						))}
					</tr>
				);
			});
			setTableEntries(entries);
		},
		[ data, memoization ]
	);

	useEffect(() => setLoading(false), [ tableEntries ]);

	const tableStyle = {
		display: 'block',
		height: '100%',
		width: '100%',
		overflowX: 'hidden',
		overflowY: 'scroll',
		border: '1px solid black'
	};

	return loading ? (
		<Spinner />
	) : (
		<table style={tableStyle}>
			{Boolean(tableEntries.length) && (
				<thead>
					<tr>
						{headings.map((el, i) => (
							<th className={`${el} heading`} key={i}>
								{capitaliseEachWord(el)}
							</th>
						))}
					</tr>
				</thead>
			)}
			<tbody>{tableEntries}</tbody>
		</table>
	);
};

export default Table;
