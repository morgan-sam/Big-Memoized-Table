import React, { useState } from 'react';

const AddData = (props) => {
	const { setUsers } = props;
	const [ userCount, setUserCount ] = useState(0);

	return (
		<div style={{ display: 'flex', padding: '1rem 0 0 1rem' }}>
			<button onClick={() => setUsers(userCount)}>Add Users</button>
			<form>
				<input
					style={{ width: '2rem' }}
					value={userCount}
					onChange={(e) => {
						const newVal = e.target.value;
						if (newVal.toString().length < 5)
							setUserCount(e.target.value.length ? parseInt(e.target.value) : 0);
					}}
				/>
			</form>
		</div>
	);
};

export default AddData;
