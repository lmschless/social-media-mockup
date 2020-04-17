import React from 'react';
import Section from './Section.js';

function Body() {
	// const bodyStyles = {
	// 	gridTemplateColumns: 'repeat(auto-fill, minmax(33vw, 3fr))',
	// 	display: 'grid',
	// 	gridTemplateRows: 'minmax(auto, 3fr',
	// 	gridColumnGap: '1em',
	// 	height: '100%'
	// };
	const bodyStyles = {
		gridTemplateColumns: 'repeat(3,1fr)',
		display: 'grid',
		gridTemplateRows: '1fr',
		gridColumnGap: '1em',
		height: '100%'
	};
	const sectionStyles = {
		margin: '.75em',
		padding: '.5em'
	};
	return (
		<div style={bodyStyles}>
			<div style={sectionStyles}>
				<Section />
			</div>
			<div style={sectionStyles}>
				<Section />
			</div>
			<div style={sectionStyles}>
				<Section />
			</div>
		</div>
	);
}

export default Body;
