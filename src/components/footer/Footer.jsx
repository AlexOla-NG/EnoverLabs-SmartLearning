import React from "react";
import WhiteBgBtn from "../button/WhiteBgBtn";
import { ReactComponent as InstagramIcon } from "../../assets/svg/instagram-icon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/facebook-icon.svg";
import { ReactComponent as MailIcon } from "../../assets/svg/gmail-icon.svg";

const Footer = () => {
	return (
		<footer>
			<div className="footer">
				<div className="logo-contact-wrapper">
					<div className="logo-wrapper ">
						<h2>SmartLearning</h2>
					</div>
					<div className="details-wrapper">
						<p>5, Balarabe Musa Crescent, VI, Lagos</p>
						<p>0800-81548213</p>
						<a href="mailto:hello@smartlearning.com">
							hello@smartlearning.com
						</a>
					</div>
				</div>
				<div className="details-wrapper capitalize">
					<h2>pricing</h2>
					<p>monthly plan</p>
					<p>quarterly plan</p>
					<p>yearly plan</p>
				</div>
				<div className="details-wrapper capitalize">
					<h2>resources</h2>
					<p>past questions</p>
					<p>take a test</p>
				</div>
				<div className="details-wrapper">
					<h2>stay up to date</h2>
					<div className="input-wrapper capitalize">
						<input type="text" placeholder="email address" />
						<WhiteBgBtn
							backgroundColor="#f9f9f9"
							borderRadius="0 0.313rem 0.313rem 0"
							padding="0.7rem 1rem"
							title="subscribe"
						/>
					</div>
				</div>
			</div>
			<div className="social-icons-wrapper">
				<div className="icon-wrapper">
					<InstagramIcon />
				</div>
				<div className="icon-wrapper">
					<FacebookIcon />
				</div>
				<div className="icon-wrapper">
					<MailIcon />
				</div>
			</div>
			<div className="hr-wrapper">
				<hr />
			</div>
			<div className="copyright-wrapper details-wrapper">
				<p>2023 SmartLearning. All Rights Reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
