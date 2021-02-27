import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import AppDropdown from "../AppDropdown/AppDropdown";
import AppColorSquare from "../AppColorSquare/AppColorSquare";
import AppButton from "../AppButton/AppButton";

import { clickable } from '../../helpers/makeElementClickable';
import { convertHexToRgb, convertRgbToHex } from '../../helpers/colorConverters';
import { colorRanges } from '../../constants/colorRanges';

import './ChangeColors.css';

const ChangeColors = ({ value, onChange }) => {
	const [isMenuOpen, changedMenuVisibility] = useState(false);
	const [colorRedValue, changedColorRed] = useState(0);
	const [colorGreenValue, changedColorGreen] = useState(0);
	const [colorBlueValue, changedColorBlue] = useState(0);
	const changeColorRef = useRef(null);

	const detectHEXColor = () => convertRgbToHex(colorRedValue, colorGreenValue, colorBlueValue);

	const getRGBFromHEX = hexCode => {
		const { red, green, blue } = convertHexToRgb(hexCode);
		changedColorRed(red);
		changedColorGreen(green);
		changedColorBlue(blue);
	}

	const detectValue = color =>{
		switch(color){
			case 'red': return colorRedValue;
			case 'green': return colorGreenValue;
			case 'blue': return colorBlueValue;
			default: return '';
		}
	}
	const detectHandlerFunction = (value, color) => {
		switch(color){
			case 'red': return changedColorRed(value);
			case 'green': return changedColorGreen(value);
			case 'blue': return changedColorBlue(value);
			default: return null;
		}
	}

	useEffect(
		() => {
			getRGBFromHEX(value);
		}, [value]);

	const handleClickCancelButton = () => {
		getRGBFromHEX(value);
		changedMenuVisibility(false);
	}

	const handleClickApplyButton = () => {
		const currentColor = detectHEXColor();
		onChange(currentColor);
		changedMenuVisibility(false);
	}

	const renderInputsRanges = () => (
		<>
				{colorRanges.map(({ id, name, value }) => (
					<div
						key={id}
						className="input-range-item"
					>
						<span>{name}</span>
						<input
							type="range"
							id={id}
							name={name}
							min={0}
							max={255}
							step={1}
							value={detectValue(value)}
							onChange={event => detectHandlerFunction(event.target.valueAsNumber, value)}
						/>
					</div>
				))}
				<div className="change-colors-buttons-container">
					<AppButton
						name="Cancel"
						handleClick={handleClickCancelButton}
						backgroundColor="#808080"
					/>
					<AppButton
						name="Ok"
						handleClick={handleClickApplyButton}
						backgroundColor="#00ff00"
					/>
				</div>
	</>);

	const detectCurrentColor = () => `rgba(${colorRedValue},${colorGreenValue},${colorBlueValue})`;
	return(
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
					renderPropsElements={renderInputsRanges}
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
