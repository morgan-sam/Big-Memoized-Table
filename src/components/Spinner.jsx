import React from 'react';
import { loadingStyle, spinnerStyle } from 'style/spinner';

const Spinner = () => {
	return (
		<div style={loadingStyle}>
			<div style={spinnerStyle} />
		</div>
	);
};

export default Spinner;
