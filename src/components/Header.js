import React from 'react';
import Nav from './Nav';
import Search from './Search';
import Tweet from './Tweet';

function Header() {
	const headerStyles = {
		height: '15vh',
		borderBottom: '.15em solid gray'
	};
	return (
		<React.Fragment>
			<header>
				<div style={headerStyles}>
					<Nav />
					<Tweet />

					<Search />
				</div>
			</header>
		</React.Fragment>
	);
}

export default Header;
