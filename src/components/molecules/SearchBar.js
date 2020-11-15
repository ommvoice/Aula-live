import React from 'react';

const SearchBar = ({ label, value, onChange, placeholder }) => {
	return (
		<>
			<div className="col-12"><h4>{label}</h4></div>
			<div className="col-12">
				<input placeholder={placeholder} type="text" className="form-control margin-btm" value={value} onChange={onChange} />
			</div>
		</>
	);
}

export default SearchBar;
