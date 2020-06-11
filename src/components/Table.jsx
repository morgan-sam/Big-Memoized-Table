import React, { useState, useEffect } from 'react';
import { capitaliseEachWord } from 'process/utility';

const headings = [ 'first name', 'last name', 'gender', 'age', 'address', 'country', 'email', 'phone', 'mobile' ];

const Table = (props) => {
	const { data } = props;

	const [ tableEntries, setTableEntries ] = useState([]);

	useEffect(
		() => {
			const entries = data.map((entry) => {
				return (
					<tr>
						<td>{entry.name.first}</td>
						<td>{entry.name.last}</td>
						<td>{capitaliseEachWord(entry.gender)}</td>
						<td>{entry.dob.age}</td>
						<td>
							{entry.location.street.number} {entry.location.street.name} {entry.location.postcode}
						</td>
						<td>{entry.location.country}</td>
						<td>{entry.email}</td>
						<td>{entry.phone}</td>
						<td>{entry.cell}</td>
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
				<tr>{headings.map((el) => <th>{capitaliseEachWord(el)}</th>)}</tr>
			</thead>
			<tbody>{tableEntries}</tbody>
		</table>
	);
};

export default Table;
