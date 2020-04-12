import React from 'react';
import Nav from './Nav';
import Search from './Search';

function Header() {
	return (
		<React.Fragment>
			<div id="wrapper">
				<Nav />
				<Search />
			</div>
		</React.Fragment>
	);
}

export default Header;
