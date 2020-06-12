import React, { useState, useEffect } from 'react';
import Table from 'components/Table';
import AddData from 'components/AddData';
import Console from 'components/Console';
import { capitaliseEachWord } from 'process/utility';

const CONSOLE_WIDTH_REM = 20;

const App = () => {
	const [ data, setData ] = useState([]);
	const ref = React.createRef();

	window.console = {
		log: (str) => {
			var node = document.createElement('div');
			node.appendChild(document.createTextNode(str));
			ref.current.prepend(node);
		}
	};

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
				active: false,
				premium: Math.random() > 0.5
			};
		});
	};

	const setUsers = async (num) => {
		const unparsed = await getUsers(num);
		const users = parseUsers(unparsed);
		setData(users);
	};

	useEffect(() => {
		const localData = window.localStorage.getItem('memoDemoTableEntries');
		if (localData && localData.length) setData(JSON.parse(localData));
		else setUsers(20);
	}, []);

	useEffect(() => window.localStorage.setItem('memoDemoTableEntries', JSON.stringify(data)), [ data ]);

	const appStyle = {
		display: 'grid',
		gridTemplateColumns: `1fr ${CONSOLE_WIDTH_REM}rem`,
		gridTemplateRows: '2rem 1fr',
		gap: '1rem',
		boxSizing: 'border-box',
		height: '100vh',
		width: '100vw',
		padding: '3rem'
	};

	return (
		<div className="App" style={appStyle}>
			<AddData data={data} setUsers={setUsers} />
			<button onClick={() => (ref.current.innerHTML = '')}>Clear Console</button>
			<Table data={data} setData={setData} />
			<Console ref={ref} CONSOLE_WIDTH_REM={CONSOLE_WIDTH_REM} />
		</div>
	);
};

export default App;
