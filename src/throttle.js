export const throttle = (function_, limit) => {
	let inThrottle = false;
	return (...arguments_) => {
		if (!inThrottle) {
			function_(...arguments_);
			inThrottle = true;
			setTimeout(() => {
				inThrottle = false;
			}, limit);
		}
	};
};
