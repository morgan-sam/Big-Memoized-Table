import React, { useState, useEffect } from 'react';
import Table from 'components/Table';
import Options from 'components/Options';
import Console from 'components/Console';
import Tutorial from 'components/Tutorial';
import { capitaliseEachWord } from 'process/utility';

const CONSOLE_WIDTH_REM = 20;

const originalConsole = window.console;

const App = () => {
	const [ data, setData ] = useState([]);
	const [ messages, setMessages ] = useState([]);
	const [ memoization, setMemoization ] = useState([]);
	const [ screenConsole, setScreenConsole ] = useState(true);
	const [ loading, setLoading ] = useState(false);
	const [ tutorialScreen, setTutorialScreen ] = useState(1);

	const addNewMessage = React.useCallback((str) => {
		setMessages((messages) => {
			return [ str, ...messages ];
		});
	}, []);

	if (screenConsole)
		window.console = {
			...window.console,
			log: addNewMessage
		};
	else window.console = originalConsole;

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

	const getSingleValue = async (key) => {
		const user = await getUsers(1);
		const parsed = parseUsers(user);
		return parsed[0][key];
	};

	const setUsers = async (num) => {
		setData([]);
		const unparsed = await getUsers(num);
		const users = parseUsers(unparsed);
		setData(users);
	};

	useEffect(() => {
		setData([]);
		const localData = window.localStorage.getItem('memoDemoTableEntries');
		if (localData && localData.length) setData(JSON.parse(localData));
		else setUsers(20);
		setLoading(false);
	}, []);

	useEffect(() => setLoading(data.length === 0), [ data ]);
	useEffect(() => (loading ? () => null : setMessages([])), [ loading ]);
	useEffect(() => setLoading(true), [ memoization ]);
	useEffect(() => setLoading(true), [ data.length ]);

	useEffect(() => window.localStorage.setItem('memoDemoTableEntries', JSON.stringify(data)), [ data ]);

	const appStyle = {
		display: 'grid',
		gridTemplateColumns: screenConsole ? `1fr ${CONSOLE_WIDTH_REM}rem` : '1fr',
		gridTemplateRows: '2rem 1fr',
		gap: '1rem',
		boxSizing: 'border-box',
		height: '100vh',
		width: '100vw',
		padding: '3rem'
	};

	return (
		<div className="App" style={appStyle}>
			<Options
				{...{
					data,
					setUsers,
					memoization,
					setMemoization,
					screenConsole,
					setScreenConsole,
					setMessages,
					setTutorialScreen
				}}
			/>
			{screenConsole && <button onClick={() => setMessages([])}>Clear Console</button>}
			<Table {...{ data, setData, memoization, loading, setLoading, setMessages, getSingleValue }} />
			{screenConsole && <Console CONSOLE_WIDTH_REM={CONSOLE_WIDTH_REM} messages={messages} />}
			{tutorialScreen > 0 && <Tutorial {...{ tutorialScreen, setTutorialScreen }} />}{' '}
		</div>
	);
};

export default App;
