import React, { useState, useEffect } from 'react';
import Table from 'components/Table';
import AddData from 'components/AddData';

function App() {
	const [ data, setData ] = useState([]);

	const getUsers = async (num) => {
		const raw = await fetch(`https://randomuser.me/api/?results=${num}`);
		const json = await raw.json();
		return json.results;
	};

	const setUsers = async (num) => setData(await getUsers(num));

	useEffect(() => setUsers(10), []);

	return (
		<div className="App">
			<AddData setUsers={setUsers} />
			<Table data={data} />
		</div>
	);
}

export default App;
