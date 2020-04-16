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
import Nav from './Nav';
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
				<header style={headerStyles}>
					<Nav />
					{this.tweet()}
				</header>
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
				<button style={tweetStyles} onClick={() => this.handleClick()}>
					Tweet
				</button>
				<p>{this.state.count}</p>
			</React.Fragment>
		);
	}

	handleClick() {
		const test = this.state.count;
		return this.setState({
			count: test + 1
		});
	}
}
