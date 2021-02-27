import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import AppDropdown from "../AppDropdown/AppDropdown";
import AppColorSquare from "../AppColorSquare/AppColorSquare";
import RenderInputsRanges from "../RenderInputsRanges/RenderInputsRanges";

import { clickable } from '../../helpers/makeElementClickable';
import { convertHexToRgb } from '../../helpers/colorConverters';

import './ChangeColors.css';

const ChangeColors = ({ value, onChange }) => {
	const [isMenuOpen, changedMenuVisibility] = useState(false);
	const [colorRedValue, changedColorRed] = useState(0);
	const [colorGreenValue, changedColorGreen] = useState(0);
	const [colorBlueValue, changedColorBlue] = useState(0);
	const changeColorRef = useRef(null);

	const convertHexToState = hexCode => {
		const { red, green, blue } = convertHexToRgb(hexCode);
		changedColorRed(red);
		changedColorGreen(green);
		changedColorBlue(blue);
	}

	useEffect(
		() => {
			convertHexToState(value);
		}, [value]);

	const detectCurrentColor = () => `rgba(${colorRedValue},${colorGreenValue},${colorBlueValue})`;
	return (
		<div className="color-picker-rows">
			<div
				{...clickable(() => changedMenuVisibility(!isMenuOpen))}
				className="change-color-color-square-wrapper"
			>
				<AppColorSquare value={detectCurrentColor()} />
			</div>
			{isMenuOpen &&
			<div
				ref={changeColorRef}
				className="app-dropdown-wrapper"
			>
				<AppDropdown
					renderPropsElements={() => <RenderInputsRanges
							value={value}
							changedMenuVisibility={changedMenuVisibility}
							onChange={onChange}
							colorRedValue={colorRedValue}
							changedColorRed={changedColorRed}
							colorGreenValue={colorGreenValue}
							changedColorGreen={changedColorGreen}
							colorBlueValue={colorBlueValue}
							changedColorBlue={changedColorBlue}
							convertHexToState={convertHexToState}
						/>
					}
					refElement={changeColorRef}
					cb={() => changedMenuVisibility(false)}
				/>
			</div>}
		</div>)
};

ChangeColors.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default ChangeColors;
