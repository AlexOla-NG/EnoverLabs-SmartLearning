import React, { useState } from "react";
import { Link } from "react-router-dom";
import AvailableTest from "../components/take a test/AvailableTest";
import Header from "../components/take a test/Header";
import Progress from "../components/take a test/Progress";
import Ranking from "../components/take a test/Ranking";
import styles from "./test.module.css";

const TakeATest = () => {

	return (
		<main className="take-a-test">
			<Header />
			<Progress />
			<Ranking />
			<AvailableTest />
			<Link to="/test" className={styles.StartTest}>Start Test</Link>
		</main>
	);
};

export default TakeATest;
