import React from 'react';

function Nav() {
	const navStyles = {
		alignItems: 'center'
		// float: 'left',
		// paddingTop: '1em'
	};
	const buttonStyles = {
		height: '5em',
		width: '9em',
		padding: '0px',
		border: '.15em solid gray',
		backgroundColor: 'white'
	};

	return (
		<div style={navStyles}>
			<nav>
				<button style={buttonStyles}>Home</button>
				<button style={buttonStyles}>Notifications</button>
				<button style={buttonStyles}>Messages</button>
			</nav>
		</div>
	);
}
export default Nav;
