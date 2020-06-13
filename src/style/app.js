import { CONSOLE_WIDTH_REM } from 'style/console';

export const getAppStyle = (screenConsole) => {
	return {
		display: 'grid',
		gridTemplateColumns: screenConsole ? `1fr ${CONSOLE_WIDTH_REM}rem` : '1fr',
		gridTemplateRows: '2rem 1fr',
		gap: '1rem',
		boxSizing: 'border-box',
		height: '100vh',
		width: '100vw',
		padding: '3rem'
	};
};
