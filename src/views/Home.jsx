import React from "react";
import HeroMobileView from "../components/landing page/HeroMobileView";
import HeroDesktopView from "../components/landing page/HeroDesktopView";
import Footer from "../components/footer/Footer";
import Stats from "../components/landing page/Stats";
import MiddleSection from "../components/landing page/MiddleSection";
import FeedbackWrapper from "../components/landing page/FeedbackWrapper";
import CallToAction from "../components/landing page/CallToAction";

const Home = () => {
	return (
		<>
			<main className="home container-layout">
				<HeroMobileView />
				<HeroDesktopView />
				<Stats />
				<MiddleSection />
				<FeedbackWrapper />
				<CallToAction />
			</main>
			<Footer />
		</>
	);
};

export default Home;
