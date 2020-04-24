import React from 'react';
import { Button, Card } from 'react-bootstrap';
import ActionButtons from './ActionButtons';
const Example = (props) => {
	return (
		<React.Fragment>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>User Profile</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk
						of the card's content.
					</Card.Text>
					<ActionButtons />
				</Card.Body>
			</Card>
		</React.Fragment>
	);
};

export default Example;
