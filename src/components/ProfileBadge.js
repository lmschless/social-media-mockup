import React from 'react';
import { Card, Button, CardTitle, CardText, ButtonGroup } from 'reactstrap';

const Example = (props) => {
	return (
		<div>
			<Card body inverse color="primary">
				<CardTitle>User Profile Card</CardTitle>
				<CardText>
					React was originally developed by Facebook to manage the dynamic, complex
					needs of a large social media app. After observing Facebook's success, many
					other social media applications.
					<table>
						<tr>
							<ButtonGroup>
								<td>
									<Button color="success">Follow</Button>
								</td>
								<td>
									<Button color="danger">Like!</Button>
								</td>
								<td>
									<Button color="info">Share</Button>
								</td>
							</ButtonGroup>
						</tr>
					</table>
				</CardText>
			</Card>
		</div>
	);
};

export default Example;
