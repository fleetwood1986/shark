import React from 'react';
import { FiAnchor, FiAperture } from 'react-icons/fi';

const Navbar = ({ links, social, showLinks, setShowLinks }) => {
	return (
		<div className="header">
			<div className="pic">
				<FiAperture />
			</div>
			<div className="nav-items">
				{links.map((item) => {
					const { id, url, text } = item;
					return (
						<div key={id} className="nav-item">
							<a href={url}></a>
							<h3>{text}</h3>
						</div>
					);
				})}
			</div>
			<div className="nav-right">
				<div className="nav-social">
					{social.map((item) => {
						const { id, url, icon } = item;
						return (
							<div key={id} className="nav-social-item">
								<a href={url}></a>
								<p>{icon}</p>
							</div>
						);
					})}
				</div>
				<div>
					<FiAnchor
						className="nav-btn"
						onClick={() => setShowLinks(!showLinks)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
