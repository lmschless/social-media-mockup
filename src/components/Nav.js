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
	NavbarText
} from 'reactstrap';

const NavBar = (props) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">reactstrap</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/components/">Components</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://github.com/reactstrap/reactstrap">
								GitHub
							</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Options
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>Option 1</DropdownItem>
								<DropdownItem>Option 2</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>Reset</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
					<NavbarText>Simple Text</NavbarText>
				</Collapse>
				<Tweet />
			</Navbar>
		</div>
	);
};

export default NavBar;
