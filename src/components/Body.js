import React from 'react';

function Body() {
	const bodyStyles = {
		gridTemplateColumns: 'repeat(auto-fill, minmax(33vw, 3fr))',
		display: 'grid',
		gridTemplateRows: 'minmax(auto, 3fr',
		height: '100%'
	};
	return (
		<div style={bodyStyles}>
			<div>
				React was originally developed by Facebook to manage the dynamic, complex needs of a large social media app.
				After observing Facebook's success, many other social media applications have also begun relying on React.
				Create a site that looks like the mock-up depicted below using only React components. Take care in determining
				which portions warrant their own components: social-media-wireframe
			</div>
			<div>
				React was originally developed by Facebook to manage the dynamic, complex needs of a large social media app.
				After observing Facebook's success, many other social media applications have also begun relying on React.
				Create a site that looks like the mock-up depicted below using only React components. Take care in determining
				which portions warrant their own components: social-media-wireframe
			</div>
			<div>
				React was originally developed by Facebook to manage the dynamic, complex needs of a large social media app.
				After observing Facebook's success, many other social media applications have also begun relying on React.
				Create a site that looks like the mock-up depicted below using only React components. Take care in determining
				which portions warrant their own components: social-media-wireframe
			</div>
		</div>
	);
}

export default Body;
