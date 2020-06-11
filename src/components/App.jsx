import React, { useState, useEffect } from 'react';
import Table from 'components/Table';
import AddData from 'components/AddData';
import { capitaliseEachWord } from 'process/utility';

function App() {
	const [ data, setData ] = useState([]);

	const getUsers = async (num) => {
		const raw = await fetch(`https://randomuser.me/api/?results=${num}`);
		const json = await raw.json();
		return json.results;
	};

	const parseUsers = (data) => {
		return data.map((entry, i) => {
			return {
				index: i,
				firstname: entry.name.first,
				lastname: entry.name.last,
				gender: capitaliseEachWord(entry.gender),
				age: entry.dob.age,
				address: `${entry.location.street.number} ${entry.location.street.name} ${entry.location.postcode}`,
				country: entry.location.country,
				email: entry.email,
				phone: entry.phone,
				mobile: entry.cell,
				active: false
			};
		});
	};

	const setUsers = async (num) => {
		const unparsed = await getUsers(num);
		const users = parseUsers(unparsed);
		setData(users);
	};

	useEffect(() => setUsers(10), []);

	console.log(data);

	return (
		<div className="App">
			<AddData setUsers={setUsers} />
			<Table data={data} />
		</div>
	);
}

export default App;
