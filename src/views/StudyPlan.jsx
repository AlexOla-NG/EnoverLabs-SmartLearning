import React from "react";
import Categories from "../components/study plan/Categories";
import Schedule from "../components/study plan/Schedule";
import StudyProgress from "../components/study plan/StudyProgress";

const StudyPlan = () => {
	return (
		<main className="study-plan">
			<Categories />
			<Schedule />
			<StudyProgress />
		</main>
	);
};

export default StudyPlan;
