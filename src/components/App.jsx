import React, { useState, useEffect } from 'react';
import Table from 'components/Table';

function App() {
	const [ data, setData ] = useState([]);

	const getUsers = async (num) => {
		const raw = await fetch(`https://randomuser.me/api/?results=${num}`);
		const json = await raw.json();
		const data = json.results;
		return data;
	};

	useEffect(() => {
		(async () => {
			setData(await getUsers(100));
		})();
	}, []);

	return (
		<div className="App">
			<Table data={data} />
		</div>
	);
}

export default App;
