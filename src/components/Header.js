import React from 'react';
import Nav from './Nav';
import Search from './Search';
import Tweet from './Tweet';

function Header() {
	return (
		<React.Fragment>
			<header>
				<div id="wrapper">
					<Nav />
					<Tweet />

					<Search />
				</div>
			</header>
		</React.Fragment>
	);
}

export default Header;
