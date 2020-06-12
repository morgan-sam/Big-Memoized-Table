import React from 'react';

const TopOptions = (props) => {
	const { data, setUsers, memoization, setMemoization } = props;

	const infoStyle = { display: 'flex', alignItems: 'center', border: '1px solid black', padding: '1rem' };

	return (
		<div className={'topOptions'} style={{ display: 'flex', flexDirection: 'row' }}>
			<div style={infoStyle}>Memoization is {memoization ? 'On' : 'Off'}</div>
			<div style={infoStyle}>Number of Users: {data.length}</div>
			<button onClick={() => setMemoization(!memoization)}>Turn Memoization {memoization ? 'Off' : 'On'}</button>
			<button onClick={() => setUsers(20)}>20 Users</button>
			<button onClick={() => setUsers(100)}>100 Users</button>
			<button onClick={() => setUsers(1000)}>1000 Users</button>
			<button onClick={() => setUsers(5000)}>5000 Users</button>
		</div>
	);
};

export default TopOptions;
