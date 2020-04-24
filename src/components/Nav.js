// import React from 'react';
// import Search from './Search';

// function Nav() {
// 	const buttonStyles = {
// 		height: '5em',
// 		width: '9em',
// 		padding: '0px',
// 		border: '.15em solid gray',
// 		backgroundColor: 'white'
// 	};

// 	return (
// 		<React.Fragment>
// 			<Search />
// 			<button style={buttonStyles}>Home</button>
// 			<button style={buttonStyles}>Notifications</button>
// 			<button style={buttonStyles}>Messages</button>
// 		</React.Fragment>
// 	);
// }
// export default Nav;

import React, { useState } from 'react';
import Tweet from './Tweet';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
	Button
} from 'reactstrap';
import { white } from 'color-name';

const NavBar = (props) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	const navStyles = {
		backgroundColor: '#2f2fa2',
		height: '10vh',
		paddingBottom: '5em',
		paddingTop: '2.5em',
		paddingLeft: '10em',
		paddingRight: '10em'
	};
	const textStyles = {
		color: 'white',
		backgroundColor: '#2f2fa2'
	};

	const highlightStyles = {
		color: 'white',
		backgroundColor: '#f6472',
		paddingRight: '2em'
	};
	return (
		<div>
			<Navbar style={navStyles} light expand="md">
				<NavbarBrand style={textStyles} href="/">
					Social Media Mockup
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink style={textStyles} href="/components/">
								Components
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								style={textStyles}
								href="https://github.com/reactstrap/reactstrap"
							>
								GitHub
							</NavLink>
						</NavItem>
						<UncontrolledDropdown style={textStyles} nav inNavbar>
							<DropdownToggle style={textStyles} nav caret>
								Options
							</DropdownToggle>
							<DropdownMenu right style={textStyles}>
								<DropdownItem>Option 1</DropdownItem>
								<DropdownItem style={textStyles}>Option 2</DropdownItem>
								<DropdownItem divider />
								<DropdownItem style={textStyles}>Reset</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
					<h1 style={highlightStyles}>
						<Button outline>Login</Button>
					</h1>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default NavBar;
