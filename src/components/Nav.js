import React from 'react';
// import Search from './Search';
// import { Navbar, Button } from 'reactstrap';
// import { Form } from 'reactstrap';
import { Form, FormControl, Navbar, Button } from 'react-bootstrap';

function Nav() {
	return (
		<React.Fragment>
			<Navbar bg="primary" variant="dark">
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-light">Search</Button>
				</Form>
			</Navbar>
		</React.Fragment>
	);
}
export default Nav;
