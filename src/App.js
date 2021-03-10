import Navbar from './components/Navbar';
import { links, social } from './data/data';
import './sass/app.scss';
import React, { useState } from 'react';

function App() {
	const [showLinks, setShowLinks] = useState(false);
	return (
		<div className="App">
			<Navbar
				showLinks={showLinks}
				setShowLinks={setShowLinks}
				links={links}
				social={social}
			/>
			{showLinks && (
				<div className="shark">
					<img
						src="https://scitechdaily.com/images/Great-White-Shark-Smile-777x583.jpg"
						alt=""
					/>
				</div>
			)}
		</div>
	);
}

export default App;
