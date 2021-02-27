import React from 'react';
import PropTypes from 'prop-types';

import {ComponentMouseDownHandler} from "../../helpers/ComponentMouseDownHandler";

import './AppDropdown.css';

const AppDropdown = ({ renderPropsElements, refElement, cb }) => (
	<>
			<div className="arrow-up"/>
			<div
				className="select-color-picker"
				onMouseDown={ ComponentMouseDownHandler(refElement, cb) }
			>
				{renderPropsElements()}
			</div>
		</>
);

AppDropdown.propTypes = {
	renderPropsElements: PropTypes.func.isRequired,
	refElement: PropTypes.object.isRequired,
	cb: PropTypes.func.isRequired,
};

export default AppDropdown;
