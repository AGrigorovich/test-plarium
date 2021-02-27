import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import AppDropdown from "../AppDropdown/AppDropdown";
import AppColorSquare from "../AppColorSquare/AppColorSquare";

import { clickable } from '../../helpers/makeElementClickable';

import './ChangeColors.css';
import {ComponentMouseDownHandler} from "../../helpers/ComponentMouseDownHandler";

const renderInputsRanges = (changedMenuVisibility, changeColorRef) => <>
		<div
			onMouseDown={ ComponentMouseDownHandler(changeColorRef, () => changedMenuVisibility(false)) }
		>
			<span>Hello</span>
		</div>
	</>

const ChangeColors = ({ value, onChange }) => {
	const [isMenuOpen, changedMenuVisibility] = useState(false);
	const changeColorRef = useRef(null);

	return <div className="color-picker-rows">
		<div
			{...clickable(() => changedMenuVisibility(!isMenuOpen))}
			className="change-color-color-square-wrapper"
		>
			<AppColorSquare value={value} />
		</div>
		{isMenuOpen &&
		<div
			ref={changeColorRef}
			className="app-dropdown-wrapper"
		>
			<AppDropdown
				renderPropsElements={() => renderInputsRanges(changedMenuVisibility, changeColorRef)}
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
