import React from 'react';

function Search() {
	const searchStyles = {
		height: '2.5em',
		width: '20em',
		float: 'right',
		marginRight: '16vw',
		marginTop: '6vh',
		borderRadius: '2em',
		border: 'solid',
		backgroundColor: 'white',
		borderColor: '#478fd5'
	};
	return <input style={searchStyles} placeholder="Search" />;
}

export default Search;
