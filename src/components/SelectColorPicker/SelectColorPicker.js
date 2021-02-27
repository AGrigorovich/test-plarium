import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { clickable } from '../../helpers/makeElementClickable';
import { ComponentMouseDownHandler } from '../../helpers/ComponentMouseDownHandler';

import './SelectColorPicker.css';

const SelectColorPicker = ({ colors, onChange, changedSelectVisibility }) => {
	const selectRef = useRef(null);

	const handleSelectColor = colorValue => {
		onChange(colorValue);
		changedSelectVisibility(false)
	}
	return(
		<>
			<div className="arrow-up"/>
			<div
				className="select-color-picker"
				ref={selectRef}
			>
				{colors.map(({ id, name, value }) => (
					// we can create component for items, it's not necessary now
					<div
						key={id}
						className="select-color-picker-item"
						{...clickable(() => handleSelectColor(value))}
						onMouseDown={ComponentMouseDownHandler(selectRef, () => changedSelectVisibility(false))}
					>
						<span>{name}</span>
						<div
							className="select-color-picker-color-square"
							style={{backgroundColor: value}}
						/>
					</div>)
				)}
			</div>
		</>)
};

SelectColorPicker.propTypes = {
	colors: PropTypes.arrayOf(PropTypes.object).isRequired,
	onChange: PropTypes.func.isRequired,
	changedSelectVisibility: PropTypes.func.isRequired,
};

export default SelectColorPicker;
