import React, { useState, useEffect } from 'react';
import Table from 'components/Table';
import Options from 'components/Options';
import Console from 'components/Console';
import Tutorial from 'components/Tutorial';
import { getUsers, parseUsers } from 'process/users';

const CONSOLE_WIDTH_REM = 20;

const originalConsole = window.console;

const App = () => {
	const [ data, setData ] = useState([]);
	const [ messages, setMessages ] = useState([]);
	const [ memoization, setMemoization ] = useState([]);
	const [ screenConsole, setScreenConsole ] = useState(true);
	const [ loading, setLoading ] = useState(false);
	const [ tutorialScreen, setTutorialScreen ] = useState(0);

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
			<Table {...{ data, setData, memoization, loading, setLoading, setMessages }} />
			{screenConsole && <Console {...{ CONSOLE_WIDTH_REM, messages }} />}
			{tutorialScreen > 0 && <Tutorial {...{ tutorialScreen, setTutorialScreen }} />}{' '}
		</div>
	);
};

export default App;
