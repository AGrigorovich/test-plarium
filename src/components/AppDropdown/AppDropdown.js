import React from 'react';
import PropTypes from 'prop-types';

import './AppDropdown.css';

const AppDropdown = ({ renderPropsElements }) =>
		<>
			<div className="arrow-up"/>
			<div
				className="select-color-picker"
			>
				{renderPropsElements()}
			</div>
		</>;

AppDropdown.propTypes = {
	renderPropsElements: PropTypes.func.isRequired,
};

export default AppDropdown;
