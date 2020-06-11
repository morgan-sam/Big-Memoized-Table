import React, { useState, useEffect } from 'react';
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
	'active'
];

const Table = (props) => {
	const { data } = props;
	const [ tableEntries, setTableEntries ] = useState([]);

	useEffect(
		() => {
			const entries = data.map((entry, i) => {
				return (
					<tr key={i}>
						<td>{i}</td>
						<td>{entry.firstname}</td>
						<td>{entry.lastname}</td>
						<td>{entry.gender}</td>
						<td>{entry.age}</td>
						<td>{entry.address}</td>
						<td>{entry.country}</td>
						<td>{entry.email}</td>
						<td>{entry.phone}</td>
						<td>{entry.mobile}</td>
						<td>✔</td>
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
