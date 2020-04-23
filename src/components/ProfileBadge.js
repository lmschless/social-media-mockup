import React from 'react';
import { Card, Button, CardTitle, CardText, ButtonGroup } from 'reactstrap';

const Example = (props) => {
	return (
		<React.Fragment>
			<Card body inverse color="primary">
				<CardTitle>User Profile Card</CardTitle>
				<CardText>
					React was originally developed by Facebook to manage the dynamic, complex
					needs of a large social media app. After observing Facebook's success, many
					other social media applications.
				</CardText>
				<center>
					<ButtonGroup>
						<Button color="success">Follow</Button>

						<Button color="danger">Like!</Button>

						<Button color="info">Share</Button>
					</ButtonGroup>
				</center>
			</Card>
		</React.Fragment>
	);
};

export default Example;
