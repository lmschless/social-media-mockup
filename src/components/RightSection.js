import React from 'react';
import ProfileBadge from './ProfileBadge';

export default function Section() {
	const sectionStyles = {
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: '1fr 1fr',
		gridColumnGap: '12px',
		gridRowGap: '15px',
		alignItems: 'center',
		justifyContent: 'center'
	};
	const bottomCard = {
		gridArea: '1/1/2/2',
		border: '.5px solid gray',
		borderRadius: '2em 2em 2em 2em',
		padding: '1.5em'
		// border: '.15em solid gray'
	};
	const topCard = {
		gridArea: '2/1/3/2',
		border: '.5px solid gray',
		borderRadius: '2em 2em 2em 2em',
		padding: '1.5em'
	};
	return (
		<div style={sectionStyles}>
			<div style={topCard}>
				React was originally developed by Facebook to manage the dynamic, complex
				needs of a large social media app. After observing Facebook's success, many
				other social media applications have also begun relying on React. Create a
				site that looks like the mock-up depicted below using only React components.
				Take care in determining which portions warrant their own components:
			</div>
			<div style={bottomCard}>
				<ProfileBadge />
			</div>
		</div>
	);
}
