import React from 'react';
import PropTypes from 'prop-types';

import './AppButton.css';

const AppButton = ({ name, handleClick, backgroundColor }) => (
	<button
		onClick={handleClick}
		className="app-button"
		style={{ backgroundColor }}
	>
		{name}
	</button>
);

AppButton.propTypes = {
	name: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
	backgroundColor: PropTypes.string.isRequired,
};

export default AppButton;
