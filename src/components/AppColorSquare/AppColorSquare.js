import React from 'react';
import PropTypes from 'prop-types';

import './AppColorSquare.css';

const AppColorSquare = ({ value }) => (
	<div
		className="select-color-picker-color-square"
		style={{ backgroundColor: value }}
	/>
);

AppColorSquare.propTypes = {
	value: PropTypes.string.isRequired,
};

export default AppColorSquare;
