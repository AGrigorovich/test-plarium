import { useEffect } from 'react';

export const ComponentMouseDownHandler = (refElement, cb) => {
	useEffect(() => {
		const handleClickOutside = event => {
			if (refElement.current && !refElement.current.contains(event.target)) {
				cb();
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [refElement, cb]);
}