import React, { useState } from 'react';

import { clickable } from '../../helpers/makeElementClickable';

import './SelectBasicColors.css';

const SelectBasicColors = () => {
	const [isSelectOpen, changedSelectVisibility] = useState(false);
	return <div className="color-picker-rows">
		<div
			className="arrow-down"
			{...clickable(() => changedSelectVisibility(!isSelectOpen))}
		/>
	</div>
};

export default SelectBasicColors;
