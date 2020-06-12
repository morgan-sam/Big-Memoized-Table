import React from 'react';

const Options = (props) => {
	const { data, setUsers, memoization, setMemoization, screenConsole, setScreenConsole } = props;

	const infoStyle = { display: 'flex', alignItems: 'center', border: '1px solid black', padding: '1rem' };

	return (
		<div className={'options'} style={{ display: 'flex', flexDirection: 'row' }}>
			<div style={{ ...infoStyle, backgroundColor: memoization ? '#E5FFE5' : '#FFB2C5' }}>
				Memoization is {memoization ? 'On' : 'Off'}
			</div>
			<div style={infoStyle}>Number of Users: {data.length}</div>
			<button onClick={() => setMemoization(!memoization)}>Turn Memoization {memoization ? 'Off' : 'On'}</button>
			<button onClick={() => setUsers(20)}>20 Users</button>
			<button onClick={() => setUsers(100)}>100 Users</button>
			<button onClick={() => setUsers(1000)}>1000 Users</button>
			<button onClick={() => setScreenConsole(!screenConsole)}>
				Use {screenConsole ? 'Off' : 'On'}screen Console
			</button>
		</div>
	);
};

export default Options;
