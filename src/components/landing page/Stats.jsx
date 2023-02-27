import React from "react";

const details = [
	{ value: 10, title: "enrolled students" },
	{ value: 2, title: "videos viewed" },
	{ value: 8, title: "tests taken" },
	{ value: 25, title: "subjects" },
	{ value: 3, title: "registered schools" },
];

const Stats = () => {
	return (
		<section className="stats my-1rem">
			{details.map((detail, i) => {
				const { value, title } = detail;
				if (title === "subjects") {
					return (
						<div key={i} className="stats-details">
							<h2>{value}</h2>
							<h3>{title}</h3>
						</div>
					);
				}
				return (
					<div key={i} className="stats-details">
						<h2>{value}K +</h2>
						<h3>{title}</h3>
					</div>
				);
			})}
		</section>
	);
};

export default Stats;
