import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import './ChangeColors.css';
import AppDropdown from "../AppDropdown/AppDropdown";
import AppColorSquare from "../AppColorSquare/AppColorSquare";

const renderInputsRanges = () => <di>Hello</di>

const ChangeColors = ({ value, onChange }) => {
	const [isMenuOpen, changedMenuVisibility] = useState(false);
	const changeColorRef = useRef(null);
	return <div className="color-picker-rows">
		<AppColorSquare value={value} />
		{isMenuOpen &&
		<div
			ref={changeColorRef}
			className="app-dropdown-wrapper"
		>
			<AppDropdown
				renderPropsElements={() => renderInputsRanges()}
			/>
		</div>
		}
	</div>
};

ChangeColors.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default ChangeColors;
