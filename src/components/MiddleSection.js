import React from 'react';
import ProfileBadge from './ProfileBadge';

export default function Section() {
	const topCard = {
		gridArea: ' 1 / 3 / 2 / 4',
		padding: '.5em'
	};
	return (
		<React.Fragment>
			<div style={topCard}>
				<ProfileBadge />
				<ProfileBadge />
				<ProfileBadge />
				<ProfileBadge />
			</div>
			{/* <div style={bottomCard}>
				<ProfileBadge />
			</div> */}
		</React.Fragment>
	);
}
