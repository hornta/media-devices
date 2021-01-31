import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const DeviceControl = ({
	label,
	selector,
	selectorCurrent,
	onChange,
}) => {
	const devices = useSelector(selector);
	const current = useSelector(selectorCurrent);

	useEffect(() => {
		if (!current && devices.length > 0) {
			onChange(devices[0].deviceId);
		}
	}, [current, onChange, devices]);

	const handleChange = (event) => {
		onChange(event.target.value);
	};

	return (
		<label>
			{label}:
			<select value={current} onChange={handleChange}>
				{devices.map(({ deviceId, label }) => {
					return (
						<option key={deviceId} value={deviceId}>
							{label}
						</option>
					);
				})}
			</select>
		</label>
	);
};

DeviceControl.propTypes = {
	label: PropTypes.string,
	selector: PropTypes.func,
	selectorCurrent: PropTypes.func,
	onChange: PropTypes.func,
};
