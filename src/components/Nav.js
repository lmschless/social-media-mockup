import React from 'react';

function Nav() {
	const navStyles = {
		// float: 'left',
		// marginTop: '3vh'
	};
	const buttonStyles = {
		height: '5em',
		width: '9em',
		padding: '0px',
		border: '.15em solid gray',
		backgroundColor: 'white'
	};

	return (
		<nav style={navStyles}>
			<button style={buttonStyles}>Home</button>
			<button style={buttonStyles}>Notifications</button>
			<button style={buttonStyles}>Messages</button>
		</nav>
	);
}
export default Nav;
