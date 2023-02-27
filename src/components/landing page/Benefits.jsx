import React from "react";
import { ReactComponent as SubjectIcon } from "../../assets/svg/subjectIcon.svg";
import { ReactComponent as NotificationIcon } from "../../assets/svg/notification-icon.svg";
import { ReactComponent as ShieldIcon } from "../../assets/svg/shield-icon.svg";
import { ReactComponent as CheckCircleIcon } from "../../assets/svg/check-circle-icon.svg";

const details = [
	{
		icon: <SubjectIcon />,
		title: "fun learning",
		body: "With our gamified feature,you get to have fun while learning. This helps to build great retention.",
	},
	{
		icon: <NotificationIcon />,
		title: "timed tests",
		body: "This feature helps students time themselves just as it is done in JAMB, so as to help students prepare better.",
	},
	{
		icon: <ShieldIcon />,
		title: "challenging",
		body: "Students get to challenge themselves more and get better with SmartLearning.",
	},
	{
		icon: <CheckCircleIcon />,
		title: "succeed",
		body: "With SmartLearing, students are sure to succeed in their exams with the right amount of practice.",
	},
];

const Benefits = () => {
	return (
		<article className="benefits">
			{details.map((detail, i) => {
				const { icon, title, body } = detail;
				return (
					<div key={i} className="benefits-detail">
						<div className="icon-wrapper">{icon}</div>
						<h5>{title}</h5>
						<p>{body}</p>
					</div>
				);
			})}
		</article>
	);
};

export default Benefits;
