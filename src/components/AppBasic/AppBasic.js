import React, { useState } from 'react';

import ColorPicker from '../ColorPicker/ColorPicker';

import { colors } from '../../constants/colors';

import './AppBasic.css';

const AppBasic = () => {
	const [backgroundColor, changedBackgroundColor] = (useState('#FFFFFF'))
	return <div id="app-basic" style={{backgroundColor}}>
		<ColorPicker
			value={backgroundColor}
			onChange={changedBackgroundColor}
			colors={colors}
		/>
	</div>
}

export default AppBasic;
