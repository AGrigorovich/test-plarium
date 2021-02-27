import React, { useState } from 'react';

import ColorPicker from '../ColorPicker/ColorPicker';

// better way is to import basicColors directly in component, but this one of task requirements
import { basicColors } from '../../constants/basicColors';

import './AppBasic.css';

const AppBasic = () => {
	const [backgroundColor, changedBackgroundColor] = (useState('#FFFFFF'))
	return <div id="app-basic" style={{backgroundColor}}>
		<ColorPicker
			value={backgroundColor}
			onChange={changedBackgroundColor}
			colors={basicColors}
		/>
	</div>
}

export default AppBasic;
