import React from 'react';
import Nav from './Nav';
import Search from './Search';

function Header() {
	return (
		<React.Fragment>
			<Nav />
			<Search />
		</React.Fragment>
	);
}

export default Header;
