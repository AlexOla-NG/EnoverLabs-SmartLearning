import React from "react";
import { ReactComponent as ClockIcon } from "../../assets/svg/clock-icon.svg";
import { ReactComponent as ChartIcon } from "../../assets/svg/chart-icon.svg";

// NOTE: all links in studyProgress will redirect to a coming soon modal (use mui)

const StudyProgress = () => {
	return (
		<section className="study-progress">
			<div className="text-details">
				<div className="header-wrapper">
					<h1>study progress</h1>
					<ClockIcon />
				</div>
				<p>Track your progress</p>
			</div>

			<div className="chart-wrapper">
				<ChartIcon />
			</div>
		</section>
	);
};

export default StudyProgress;
