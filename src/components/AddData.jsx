import React, { useState } from 'react';

const AddData = (props) => {
	const { setUsers } = props;
	const [ userCount, setUserCount ] = useState(0);

	return (
		<div className={'addData'} style={{ display: 'flex', padding: '1rem 0 0 1rem' }}>
			<button onClick={() => setUsers(userCount)}>Add Users</button>
			<form
				onKeyPress={(e) => {
					if (e.key === 'Enter') {
						e.preventDefault();
						setUsers(userCount);
					}
				}}
			>
				<input
					style={{ width: '2rem', textAlign: 'center' }}
					value={userCount}
					onChange={(e) => {
						const newVal = e.target.value;
						if (newVal.toString().length < 5)
							setUserCount(e.target.value.length ? parseInt(e.target.value) : 0);
					}}
				/>
			</form>
			<button onClick={() => setUsers(10)}>10 Users</button>
			<button onClick={() => setUsers(100)}>100 Users</button>
			<button onClick={() => setUsers(1000)}>1000 Users</button>
			<button onClick={() => setUsers(5000)}>5000 Users</button>
		</div>
	);
};

export default AddData;
