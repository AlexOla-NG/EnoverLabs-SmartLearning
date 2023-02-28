import React from "react";
import student5 from "../../assets/images/student-5.png";
import student6 from "../../assets/images/student-6.png";
import ColorBgBtn from "../button/ColorBgBtn";
import DemoLeaderboard from "../leaderboard/DemoLeaderboard";
import Benefits from "./Benefits";

const textFiller = (
	<p>
		Our resource materials are up-to-date with their answers, which helps
		students learn and practice more. The gamified feature helps in
		improving retention and also challenges our students to do better. Our
		students have testified to how great being on the leadership board
		feels.
	</p>
);

const MiddleSection = () => {
	return (
		<section className="middle-section">
			<div className="text-details grid-tc-1fr">
				<h4>Why Students Choose SmartLearning Over Other Platforms</h4>
				{textFiller}
			</div>

			<div className="text-details-wrapper">
				<img src={student5} alt="jane doe" />
				<Benefits />
			</div>

			<div className="text-details-wrapper">
				<div className="text-details">
					<h4>
						Start Studying Smarter With A Study Plan, Just For You
					</h4>
					{textFiller}
					<div className="mobile-view-btn">
						<ColorBgBtn
							borderRadius="0.313rem"
							padding="0.625rem 2.188rem"
						/>
					</div>
					<div className="desktop-view-btn">
						<ColorBgBtn padding="1.25rem 2.625rem" />
					</div>
				</div>
				<img src={student6} alt="john smith" />
			</div>

			<div className="text-details-wrapper reverse">
				<div className="text-details">
					<h4>Gamified Learning</h4>
					{textFiller}
					<div className="mobile-view-btn">
						<ColorBgBtn
							borderRadius="0.313rem"
							padding="0.625rem 2.188rem"
							text="take test"
						/>
					</div>
					<div className="desktop-view-btn">
						<ColorBgBtn
							padding="1.25rem 2.625rem"
							text="take test"
						/>
					</div>
				</div>
				<DemoLeaderboard />
			</div>
		</section>
	);
};

export default MiddleSection;
