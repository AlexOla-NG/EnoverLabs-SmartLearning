import React from "react";
import avatar from "../../assets/images/avatar.png";
import { ReactComponent as CoinIcon } from "../../assets/svg/coin-icon.svg";
import { ReactComponent as BadgeIcon } from "../../assets/svg/badge-icon.svg";

const ProfileCard = () => {
	return (
		<div className="profile-card">
			<div className="avatar-wrapper">
				<div className="avatar">
					<img src={avatar} alt="avatar" loading="lazy" />
				</div>
				<h3>lieutenant</h3>
			</div>

			<div className="profile-details-wrapper">
				<div className="profile-details">
					<div className="icon-wrapper">
						<CoinIcon />
					</div>
					<p>65/100</p>
				</div>
				<div className="profile-details">
					<div className="icon-wrapper">
						<BadgeIcon />
					</div>
					<p>5300</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
