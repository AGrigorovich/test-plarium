import React from 'react';
import PropTypes from 'prop-types';

import SelectBasicColors from '../SelectBasicColors/SelectBasicColors';
import ChangeColors from '../ChangeColors/ChangeColors';

import './ColorPicker.css';

const ColorPicker = ({ value, onChange, colors }) => {
	return <div className="color-picker">
		<span className="color-identification">{value}</span>
		<ChangeColors
			value={value}
			onChange={onChange}
		/>
		<SelectBasicColors
			colors={colors}
			onChange={onChange}
		/>
	</div>
};

ColorPicker.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	colors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ColorPicker;
