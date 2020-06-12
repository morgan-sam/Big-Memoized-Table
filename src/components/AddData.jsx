import React, { useState } from 'react';

const AddData = (props) => {
	const { data, setUsers } = props;
	const [ userCount, setUserCount ] = useState(0);

	return (
		<div className={'addData'} style={{ display: 'flex', flexDirection: 'row' }}>
			<div style={{ display: 'flex', alignItems: 'center' }}>Number of Users: {data.length}</div>
			<button onClick={() => setUsers(20)}>20 Users</button>
			<button onClick={() => setUsers(100)}>100 Users</button>
			<button onClick={() => setUsers(1000)}>1000 Users</button>
			<button onClick={() => setUsers(5000)}>5000 Users</button>
		</div>
	);
};

export default AddData;
