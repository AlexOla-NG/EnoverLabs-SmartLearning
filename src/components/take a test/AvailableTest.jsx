import React from "react";
import TestCard from "../card/TestCard";
import testPreview1 from "../../assets/images/test-preview-1.png";
import testPreview2 from "../../assets/images/test-preview-2.png";
import testPreview3 from "../../assets/images/test-preview-3.png";

const tests = [
	{
		coinValue: 20,
		time: 30,
		topic: "use of english",
		imagePreview: testPreview1,
	},
	{
		coinValue: 50,
		time: 40,
		topic: "mathematics",
		imagePreview: testPreview2,
	},
	{
		coinValue: 30,
		time: 30,
		topic: "chemistry",
		imagePreview: testPreview3,
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
