import React from "react";
import SubjectProgress from "../card/SubjectProgress";

const subjects = [
	{ progressValue: 100, topic: "english" },
	{ progressValue: 50, topic: "mathematics" },
	{ progressValue: 20, topic: "chemistry" },
];

const Progress = () => {
	return (
		<section className="progress">
			<div className="text-wrapper">
				<h2>Subject Progress</h2>
				<p>Track your progress</p>
			</div>

			<div className="subject-progress-wrapper">
				{subjects.map((subject, i) => {
					return <SubjectProgress key={i} {...subject} />;
				})}
			</div>
		</section>
	);
};

export default Progress;
