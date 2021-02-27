import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { clickable } from '../../helpers/makeElementClickable';

import './SelectColorPicker.css';

const SelectColorPicker = ({ colors, onChange }) => {
	return(
		<>
			<div className="arrow-up"/>
			<div className="select-color-picker">
				{colors.map(({ id, name, value }) => (
					<div
						key={id}
						className="select-color-picker-item"
						{...clickable(() => onChange(value))}
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
};

export default SelectColorPicker;
