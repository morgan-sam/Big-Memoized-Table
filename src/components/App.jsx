import React from 'react';
import Table from 'components/Table';

function App() {
	const getUsers = async (num) => {
		const raw = await fetch(`https://randomuser.me/api/?results=${num}`);
		const json = await raw.json();
		const data = json.results;
		console.log(data);
		return data;
	};

	return (
		<div className="App">
			<Table />
		</div>
	);
}

export default App;
