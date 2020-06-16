import React from 'react';
import { optionsStyle, infoStyle, optionButton } from 'style/options';

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
				style={optionButton}
				onClick={() => {
					setMemoization(!memoization);
				}}
			>
				Turn Memoization {memoization ? 'Off' : 'On'}
			</button>
			<div style={infoStyle}>Number of Users: {data.length}</div>
			<button style={optionButton} onClick={() => setUserCountResetConsole(20)}>
				20 Users
			</button>
			<button style={optionButton} onClick={() => setUserCountResetConsole(100)}>
				100 Users
			</button>
			<button style={optionButton} onClick={() => setUserCountResetConsole(1000)}>
				1000 Users
			</button>
			<button style={optionButton} onClick={() => setScreenConsole(!screenConsole)}>
				Use {screenConsole ? 'Off' : 'On'}screen Console
			</button>
			<button style={{ ...optionButton, backgroundColor: 'khaki' }} onClick={() => setTutorialScreen(1)}>
				Tutorial
			</button>
		</div>
	);
};

export default Options;
