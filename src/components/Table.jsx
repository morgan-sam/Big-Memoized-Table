import React, { useState, useEffect } from 'react';
import Cell from 'components/Cell';
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
	const { data, setData } = props;
	const [ tableEntries, setTableEntries ] = useState([]);

	useEffect(
		() => {
			const entries = data.map((entry, i) => {
				return (
					<tr key={i}>
						{Object.entries(entry).map(([ key, value ], i) => (
							<Cell
								cellKey={key}
								cellVal={value}
								entryIndex={entry.index}
								key={i}
								data={data}
								setData={setData}
							/>
						))}
					</tr>
				);
			});
			setTableEntries(entries);
		},
		[ data ]
	);

	return (
		<table>
			<thead>
				<tr>{headings.map((el, i) => <th key={i}>{capitaliseEachWord(el)}</th>)}</tr>
			</thead>
			<tbody>{tableEntries}</tbody>
		</table>
	);
};

export default Table;
