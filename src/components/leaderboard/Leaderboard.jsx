import React from "react";
import ImageText from "./ImageText";
import ColorBgBtn from "../button/ColorBgBtn";
import student1 from "../../assets/images/student-1.png";
import student2 from "../../assets/images/student-2.png";
import student3 from "../../assets/images/student-3.png";
import student4 from "../../assets/images/student-4.png";
import student5 from "../../assets/images/student-5.png";
import student6 from "../../assets/images/student-6.png";

const details = [
	{ image: student1, name: "ekene nduka", points: "10,200" },
	{ image: student2, name: "dave temmie", points: "8,000" },
	{ image: student3, name: "sonke abram", points: "6,500" },
	{ image: student4, name: "dorcas mide", points: "6,200" },
	{ image: student5, name: "you", points: "5,300" },
	{ image: student6, name: "felix mane", points: "4,900" },
	{ image: student3, name: "sophia ogbe", points: "4,000" },
	{ image: student4, name: "olumide paul", points: "3,700" },
	{ image: student5, name: "ijai samuel", points: "3,100" },
	{ image: student6, name: "henry fagbemi", points: "2,200" },
];

const Leaderboard = () => {
	return (
		<div className="leaderboard">
			<div className="header">
				<h2>leadership board</h2>
			</div>

			<div className="participants">
				{details.map((detail, i) => {
					const { image, name, points } = detail;
					return (
						<div className="content" key={i}>
							<ImageText image={image} title={name} />
							<p>{points}</p>
						</div>
					);
				})}
			</div>

			<div className="btn-wrapper">
				<ColorBgBtn
					text="challenge leader"
					borderRadius="0.69rem"
					padding="0.9rem 0"
				/>
			</div>
		</div>
	);
};

export default Leaderboard;
