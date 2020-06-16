import React from 'react';
import { optionsStyle, infoStyle } from 'style/options';

const Options = (props) => {
	const {
		data,
		setUsers,
		memoization,
		setMemoization,
		screenConsole,
		setScreenConsole,
		setMessages,
		setTutorialScreen
	} = props;

	const setUserCountResetConsole = (num) => {
		setUsers(num);
		setMessages([]);
	};

	return (
		<div className={'options'} style={optionsStyle}>
			<div style={{ ...infoStyle, backgroundColor: memoization ? '#E5FFE5' : '#FFB2C5' }}>
				Memoization is {memoization ? 'On' : 'Off'}
			</div>
			<button
				onClick={() => {
					setMemoization(!memoization);
				}}
			>
				Turn Memoization {memoization ? 'Off' : 'On'}
			</button>
			<div style={infoStyle}>Number of Users: {data.length}</div>
			<button onClick={() => setUserCountResetConsole(20)}>20 Users</button>
			<button onClick={() => setUserCountResetConsole(100)}>100 Users</button>
			<button onClick={() => setUserCountResetConsole(1000)}>1000 Users</button>
			<button onClick={() => setScreenConsole(!screenConsole)}>
				Use {screenConsole ? 'Off' : 'On'}screen Console
			</button>
			<button style={{ backgroundColor: 'khaki' }} onClick={() => setTutorialScreen(1)}>
				Tutorial
			</button>
		</div>
	);
};

export default Options;
