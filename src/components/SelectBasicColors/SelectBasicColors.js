import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

import AppDropdown from '../AppDropdown/AppDropdown';
import AppColorSquare from '../AppColorSquare/AppColorSquare';

import { clickable } from '../../helpers/makeElementClickable';

import './SelectBasicColors.css';

const renderColors = (colors, handleSelectColor) => <>
	{colors.map(({ id, name, value }) => (
		// we can create component for items, but it's not necessary now
		<div
			key={id}
			className="select-color-picker-item"
			{...clickable(() => handleSelectColor(value))}
		>
			<span>{name}</span>
			<AppColorSquare value={value} />
		</div>)
	)}</>

const SelectBasicColors = ({ colors, onChange }) => {
	const [isSelectOpen, changedSelectVisibility] = useState(false);
	const selectRef = useRef(null);
	const handleSelectColor = colorValue => {
		onChange(colorValue);
	}
	return <div className="color-picker-rows">
		<div
			className="arrow-down"
			{...clickable(() => {
				changedSelectVisibility(!isSelectOpen)
			})}
		/>
		{isSelectOpen &&
			<div
				ref={selectRef}
				className="app-dropdown-wrapper"
			>
				<AppDropdown
					renderPropsElements={() => renderColors(colors, handleSelectColor)}
					refElement={selectRef}
					cb={() => changedSelectVisibility(false)}
				/>
			</div>
		}
	</div>
};

SelectBasicColors.propTypes = {
	colors: PropTypes.arrayOf(PropTypes.object).isRequired,
	onChange: PropTypes.func.isRequired,
};

export default SelectBasicColors;
