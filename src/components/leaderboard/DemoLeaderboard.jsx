import React from "react";
import ImageText from "./ImageText";
import student1 from "../../assets/images/student-1.png";
import student2 from "../../assets/images/student-2.png";
import student3 from "../../assets/images/student-3.png";
import student4 from "../../assets/images/student-4.png";
import student5 from "../../assets/images/student-5.png";
import student6 from "../../assets/images/student-6.png";

// NOTE: this is only for use in the landing page
// use the other leaderboard when setting up the gamified page

// TODO: stopped here
// style demoleaderboard

const details1 = [
	{ image: student1, name: "ekene nduka", points: "10,200" },
	{ image: student2, name: "dave temmie", points: "8,000" },
	{ image: student3, name: "sonke abram", points: "5,100" },
];

const details2 = [
	{ image: student4, name: "dorcas mide", points: "4,200" },
	{ image: student5, name: "you", points: "2,013" },
	{ image: student6, name: "felix mane", points: "1,900" },
];

const DemoLeaderboard = () => {
	return (
		<div className="demo-leaderboard">
			<div className="header">
				<h4>leadership board</h4>
				<h5>14 of 30</h5>
				<p>Ends August 31st, 9 Days Left</p>
			</div>

			<div className="main">
				<div className="content">
					<h5>Top Readers</h5>
					<p>points</p>
				</div>

				<div className="participants">
					<div className="details">
						{details1.map((detail, i) => {
							const { image, name, points } = detail;
							return (
								<div className="content" key={i}>
									<ImageText image={image} title={name} />
									<p>{points}</p>
								</div>
							);
						})}
					</div>

					<div className="details">
						{details2.map((detail, i) => {
							const { image, name, points } = detail;
							return (
								<div className="content" key={i}>
									<ImageText image={image} title={name} />
									<p>{points}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DemoLeaderboard;
