import React from 'react';

const headings = [ 'firstname', 'lastname', 'age', 'career', 'married', 'home', 'business' ];

const Table = () => {
	return (
		<table>
			<thead>
				<tr>{headings.map((el) => <th>{el.charAt(0).toUpperCase() + el.slice(1)}</th>)}</tr>
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
