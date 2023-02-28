import React from "react";
import ColorBgBtn from "../button/ColorBgBtn";

const CallToAction = () => {
	return (
		<section className="call-to-action">
			<h2>Do You Want To Ace Your Exams With Confidence?</h2>
			<div className="mobile-view-btn">
				<ColorBgBtn
					borderRadius="0.313rem"
					padding="0.625rem 2.188rem"
				/>
			</div>
			<div className="desktop-view-btn">
				<ColorBgBtn padding="1.25rem 2.625rem" />
			</div>
		</section>
	);
};

export default CallToAction;
