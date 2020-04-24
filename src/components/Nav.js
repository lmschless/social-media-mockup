import React from 'react';
import Search from './Search';

function Nav() {
	const buttonStyles = {
		height: '5em',
		width: '9em',
		padding: '0px',
		border: '.15em solid gray',
		backgroundColor: 'white'
	};

	return (
		<React.Fragment>
			<Search />
			<button style={buttonStyles}>Home</button>
			<button style={buttonStyles}>Notifications</button>
			<button style={buttonStyles}>Messages</button>
		</React.Fragment>
	);
}
export default Nav;
