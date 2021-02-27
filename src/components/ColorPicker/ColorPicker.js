import React from 'react';
import PropTypes from 'prop-types';

import './ColorPicker.css';

const ColorPicker = ({ value, onChange, colors }) => {
	return <div className="color-picker">
		<span>{value}</span>
	</div>
};

ColorPicker.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	colors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ColorPicker;
