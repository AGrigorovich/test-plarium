export const convertHexToRgb = hexCode => {
	let hex = hexCode.replace('#', '');
	return {
		red: parseInt(hex.substring(0, 2), 16),
		green: parseInt(hex.substring(2, 4), 16),
		blue: parseInt(hex.substring(4, 6), 16),
	}
};

const convertNumberToHEXValue = number => {
	const hex = number.toString(16);
	return hex.length === 1 ? "0" + hex : hex;
}

export const convertRgbToHex = (redInteger, greenInteger, blueInteger) => {
	const red = convertNumberToHEXValue(redInteger);
	const green = convertNumberToHEXValue(greenInteger);
	const blue = convertNumberToHEXValue(blueInteger);

	return `#${red}${green}${blue}`;
};
