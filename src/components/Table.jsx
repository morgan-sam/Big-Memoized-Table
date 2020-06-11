import React from 'react';
import { capitaliseEachWord } from 'process/utility';

const headings = [ 'first name', 'last name', 'age', 'career', 'married', 'home', 'business owner' ];

const Table = () => {
	return (
		<table>
			<thead>
				<tr>{headings.map((el) => <th>{capitaliseEachWord(el)}</th>)}</tr>
			</thead>
			<tbody>
				<tr>
					<td>Jill</td>
					<td>Smith</td>
					<td>50</td>
				</tr>
				<tr>
					<td>Eve</td>
					<td>Jackson</td>
					<td>94</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Table;
