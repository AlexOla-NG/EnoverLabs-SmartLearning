import React from "react";
import ProfileCard from "../card/ProfileCard";

const Header = () => {
	return (
		<section className="header">
			<div className="text-wrapper">
				<h1>Welcome Olumide,</h1>
				<p>It’s time to gain more wins!!!</p>
			</div>

			<div className="profile-card-wrapper">
				<ProfileCard />
			</div>
		</section>
	);
};

export default Header;
