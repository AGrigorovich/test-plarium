export const clickable = onClick => ({
	onClick,
	tabIndex: 0,
	role: 'button',
	onKeyPress: e => (e.keyCode === 13 || e.charCode === 13) && onClick(),
});
