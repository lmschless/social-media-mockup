import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import ActionButtons from './ActionButtons';
const Example = (props) => {
	return (
		<React.Fragment>
			<Card body inverse color="secondary">
				<CardTitle>User Profile Card</CardTitle>
				<CardText>
					React was originally developed by Facebook to manage the dynamic, complex
					needs of a large social media app. After observing Facebook's success, many
					other social media applications.
				</CardText>
				<ActionButtons />
			</Card>
		</React.Fragment>
	);
};

export default Example;
