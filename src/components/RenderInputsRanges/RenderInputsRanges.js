import React from 'react';
import PropTypes from 'prop-types';

import AppButton from "../AppButton/AppButton";

import { convertRgbToHex } from '../../helpers/colorConverters';
import { colorRanges } from '../../constants/colorRanges';

import './RenderInputsRanges.css';

const RenderInputsRanges = ({
	value,
	changedMenuVisibility,
	onChange,
	colorRedValue,
	changedColorRed,
	colorGreenValue,
	changedColorGreen,
	colorBlueValue,
	changedColorBlue,
	convertHexToState,
}) => {
	const detectHEXColor = () => convertRgbToHex(colorRedValue, colorGreenValue, colorBlueValue);

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

	const handleClickCancelButton = () => {
		convertHexToState(value);
		changedMenuVisibility(false);
	}

	const handleClickApplyButton = () => {
		const currentColor = detectHEXColor();
		onChange(currentColor);
		changedMenuVisibility(false);
	}

	return (
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
		</>)
};

RenderInputsRanges.propTypes = {
	value: PropTypes.string.isRequired,
	changedMenuVisibility: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	colorRedValue: PropTypes.number.isRequired,
	changedColorRed: PropTypes.func.isRequired,
	colorGreenValue: PropTypes.number.isRequired,
	changedColorGreen: PropTypes.func.isRequired,
	colorBlueValue: PropTypes.number.isRequired,
	changedColorBlue: PropTypes.func.isRequired,
	convertHexToState: PropTypes.func.isRequired,
};

export default RenderInputsRanges;
