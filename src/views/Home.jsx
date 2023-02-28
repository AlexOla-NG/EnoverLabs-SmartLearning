import React from "react";
import Container from "@mui/material/Container";
import HeroMobileView from "../components/landing page/HeroMobileView";
import HeroDesktopView from "../components/landing page/HeroDesktopView";
import Footer from "../components/footer/Footer";
import Stats from "../components/landing page/Stats";
import MiddleSection from "../components/landing page/MiddleSection";
import FeedbackWrapper from "../components/landing page/FeedbackWrapper";
import CallToAction from "../components/landing page/CallToAction";

// TODO: stopped here
// we need stats & call to action to extend the width of the container
// only way to achieve this would be to remove the container tag, & set -ve margin on the components
// we'll need to manually define padding using the container-layout class

const Home = () => {
	return (
		<>
			{/* <Container maxWidth="125rem"> */}
			<main className="home container-layout">
				<HeroMobileView />
				<HeroDesktopView />
				<Stats />
				<MiddleSection />
				<FeedbackWrapper />
				<CallToAction />
			</main>
			{/* </Container> */}
			<Footer />
		</>
	);
};

export default Home;
