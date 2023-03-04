import React from "react";
import TestCard from "../card/TestCard";

const tests = [
	{
		coinValue: 20,
		time: 30,
		topic: "use of english",
	},
	{
		coinValue: 50,
		time: 40,
		topic: "mathematics",
	},
	{
		coinValue: 30,
		time: 30,
		topic: "chemistry",
	},
];

const AvailableTest = () => {
	return (
		<section className="available-test">
			<h2>available test</h2>

			<div className="test-card-wrapper">
				{tests.map((test, i) => {
					return <TestCard key={i} {...test} />;
				})}
			</div>
		</section>
	);
};

export default AvailableTest;
