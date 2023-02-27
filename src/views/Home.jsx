import React from "react";
import Container from "@mui/material/Container";
import HeroMobileView from "../components/landing page/HeroMobileView";
import HeroDesktopView from "../components/landing page/HeroDesktopView";
import Footer from "../components/footer/Footer";
import Stats from "../components/landing page/Stats";
import MiddleSection from "../components/landing page/MiddleSection";
import FeedbackWrapper from "../components/landing page/FeedbackWrapper";

const Home = () => {
	return (
		<>
			<Container maxWidth="125rem">
				<main className="home container-layout">
					<HeroMobileView />
					<HeroDesktopView />
					<Stats />
					<MiddleSection />
					<FeedbackWrapper />
				</main>
			</Container>
			<Footer />
		</>
	);
};

export default Home;
