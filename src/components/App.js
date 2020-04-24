import React from 'react';
import Header from './Header';
import LeftSection from './LeftSection.js';
import MiddleSection from './MiddleSection.js';
import RightSection from './RightSection.js'; // import '../nav.css';
// import '/components/App.css';

function App() {
	const bodyStyles = {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gridTemplateRows: 'repeat(2, 1fr)',
		gridColumnGap: '3px',
		gridRowGap: '3px'
	};

	const sectionStyles = {
		// margin: '.75em',
		// padding: '.5em'
	};
	return (
		<React.Fragment>
			<Header />
			<div style={bodyStyles}>
				<LeftSection style={sectionStyles} />
				<MiddleSection style={sectionStyles} />
				<RightSection style={sectionStyles} />
			</div>
		</React.Fragment>
	);
}

export default App;
