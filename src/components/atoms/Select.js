import React from 'react';

const Select = ({ defaultValue, onChange, options }) => {
	return (
		<div className="col-6">
			<select defaultValue={defaultValue} onChange={onChange} className="form-control margin-btm">
				{
					options && options.map((option) => (
							<option key={option.value} value={option.value}>{option.title}</option>
					))
				}
			</select>
		</div>
	);
}

export default Select;
