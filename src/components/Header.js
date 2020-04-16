// import React from 'react';
// import Nav from './Nav';
// import Search from './Search';
// import Tweet from './Tweet';

// // Original function component, to be replaced with
// // a class component.

// function Header() {
// 	const headerStyles = {
// 		height: '15vh',
// 		borderBottom: '.15em solid gray'
// 	};
// 	return (
// 		<React.Fragment>
// 			<header>
// 				<div style={headerStyles}>
// 					<Nav />
// 					<Tweet />
// 					<Search />
// 				</div>
// 			</header>
// 		</React.Fragment>
// 	);
// }

// export default Header;

import React, { Component } from 'react';

export default class Header extends Component {
	state = {
		count: 0
	};
	render() {
		const headerStyles = {
			height: '15vh',
			borderBottom: '.15em solid gray'
		};
		return (
			<React.Fragment>
				<header style={headerStyles}>{this.tweet()}</header>
			</React.Fragment>
		);
	}

	tweet() {
		const tweetStyles = {
			width: '7em',
			height: '3em',
			float: 'right',
			marginTop: '2.5em',
			marginRight: '1em',
			borderRadius: '2em',
			border: 'solid',
			backgroundColor: 'white',
			borderColor: '#478fd5'
		};
		return (
			<React.Fragment>
				<p>{this.state.count}</p>
				<button style={tweetStyles} onClick={() => this.handleClick()}>
					Tweet
				</button>
			</React.Fragment>
		);
	}

	handleClick() {
		return this.setState({
			count: (this.state.count += 1)
		});
	}
}
