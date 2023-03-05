import React from "react";
import AvailableTest from "../components/take a test/AvailableTest";
import Header from "../components/take a test/Header";
import Progress from "../components/take a test/Progress";
import Ranking from "../components/take a test/Ranking";

const TakeATest = () => {
	return (
		<main className="take-a-test">
			<Header />
			<Progress />
			<Ranking />
			<AvailableTest />
		</main>
	);
};

export default TakeATest;
