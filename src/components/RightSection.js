import React from 'react';
import ProfileBadge from './ProfileBadge';

export default function Section() {
	const sectionStyles = {
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: '1fr 1fr',
		gridColumnGap: '12px',
		gridRowGap: '15px',
		alignItems: 'center'
	};
	const bottomCard = {
		gridArea: '2 / 3 / 3 / 4'
		// border: '.15em solid gray'
	};
	const topCard = {
		gridArea: '1 / 3 / 2 / 4'
	};
	return (
		<React.Fragment>
			<div style={topCard}>
				<ProfileBadge />
			</div>
			<div style={bottomCard}>
				<ProfileBadge />
			</div>
		</React.Fragment>
	);
}
