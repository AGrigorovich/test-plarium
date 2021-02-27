import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import AppDropdown from "../AppDropdown/AppDropdown";
import AppColorSquare from "../AppColorSquare/AppColorSquare";

import { clickable } from '../../helpers/makeElementClickable';
import { colorRanges } from '../../constants/colorRanges';

import './ChangeColors.css';

const ChangeColors = ({ value, onChange }) => {
	const [isMenuOpen, changedMenuVisibility] = useState(false);
	const [colorRedValue, changedColorRed] = useState(0);
	const [colorGreenValue, changedColorGreen] = useState(0);
	const [colorBlueValue, changedColorBlue] = useState(0);
	const changeColorRef = useRef(null);

	const detectValue = color =>{
		switch(color){
			case 'red': return colorRedValue;
			case 'green': return colorGreenValue;
			case 'blue': return colorBlueValue;
			default: return '';
		}
	}
	const detectFunction = (value, color) => {
		switch(color){
			case 'red': return changedColorRed(value);
			case 'green': return changedColorGreen(value);
			case 'blue': return changedColorBlue(value);
			default: return null;
		}
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
							onChange={event => detectFunction(event.target.value, value)}
						/>
					</div>
				))}
	</>)

	useEffect(
		() => {
			let hex = value.replace('#', '');

			const redColor = parseInt(hex.substring(0, 2), 16);
			const greenColor = parseInt(hex.substring(2, 4), 16);
			const blueColor = parseInt(hex.substring(4, 6), 16);
			changedColorRed(redColor);
			changedColorGreen(greenColor);
			changedColorBlue(blueColor);

		}, [value]);

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
