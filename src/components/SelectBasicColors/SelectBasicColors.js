import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SelectColorPicker from '../SelectColorPicker/SelectColorPicker';

import { clickable } from '../../helpers/makeElementClickable';

import './SelectBasicColors.css';

const SelectBasicColors = ({ colors, onChange }) => {
	const [isSelectOpen, changedSelectVisibility] = useState(false);
	return <div className="color-picker-rows">
		<div
			className="arrow-down"
			{...clickable(() => changedSelectVisibility(!isSelectOpen))}
		/>
		{isSelectOpen &&
		<SelectColorPicker
			colors={colors}
			onChange={onChange}
		/>}
	</div>
};

SelectBasicColors.propTypes = {
	colors: PropTypes.arrayOf(PropTypes.object).isRequired,
	onChange: PropTypes.func.isRequired,
};

export default SelectBasicColors;
