import React from 'react';
// import { Navbar, Form, FormControl, Button } from 'reactstrap';

function Nav() {
	// const navStyles = {
	// 	alignItems: 'center'
	// 	// float: 'left',
	// 	// paddingTop: '1em'
	// };
	// const buttonStyles = {
	// 	height: '5em',
	// 	width: '9em',
	// 	padding: '0px',
	// 	border: '.15em solid gray',
	// 	backgroundColor: 'white'
	// };

	return (
		// <div style={navStyles}>
		// 	<button style={buttonStyles}>Home</button>
		// 	<button style={buttonStyles}>Notifications</button>
		// 	<button style={buttonStyles}>Messages</button>
		// </div>
		<React.Fragment>
			{' '}
			<nav class="mb-1 navbar navbar-expand-lg navbar-dark default-color">
				<a class="navbar-brand" href="#">
					Navbar
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent-333"
					aria-controls="navbarSupportedContent-333"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent-333">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<a class="nav-link" href="#">
								Home
								<span class="sr-only">(current)</span>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Features
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="google.com">
								Pricing
							</a>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								id="navbarDropdownMenuLink-333"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Dropdown
							</a>
							<div
								class="dropdown-menu dropdown-default"
								aria-labelledby="navbarDropdownMenuLink-333"
							>
								<a class="dropdown-item" href="google.com">
									Action
								</a>
								<a class="dropdown-item" href="google.com">
									Another action
								</a>
								<a class="dropdown-item" href="google.com">
									Something else here
								</a>
							</div>
						</li>
					</ul>
					<ul class="navbar-nav ml-auto nav-flex-icons">
						<li class="nav-item">
							<a class="nav-link waves-effect waves-light">
								<i class="fab fa-twitter" />
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link waves-effect waves-light">
								<i class="fab fa-google-plus-g" />
							</a>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								id="navbarDropdownMenuLink-333"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<i class="fas fa-user" />
							</a>
							<div
								class="dropdown-menu dropdown-menu-right dropdown-default"
								aria-labelledby="navbarDropdownMenuLink-333"
							>
								<a class="dropdown-item" href="google.com">
									Action
								</a>
								<a class="dropdown-item" href="google.com">
									Another action
								</a>
								<a class="dropdown-item" href="google.com">
									Something else here
								</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</React.Fragment>
	);
}
export default Nav;
