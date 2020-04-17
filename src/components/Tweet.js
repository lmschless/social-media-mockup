import React from 'react';

function Tweet() {
	const tweetStyles = {
		width: '7em',
		height: '3em',
		float: 'right',
		// marginTop: '2.5em',
		// marginRight: '1em',
		borderRadius: '2em',
		border: 'solid',
		backgroundColor: 'white',
		borderColor: '#478fd5'
	};
	return <button style={tweetStyles}>Tweet</button>;
}

export default Tweet;
