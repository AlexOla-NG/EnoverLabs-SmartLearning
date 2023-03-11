import { useState } from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./views/Home";
import Pricing from "./views/Pricing";
import StudyPlan from "./views/StudyPlan";
import TakeATest from "./views/TakeATest";
import Test from "./views/Test";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Error from "./views/Error";
import OutletWrapper from "./components/shared/OutletWrapper";

const drawerWidth = 240;

const App = () => {
	// const [mobileOpen, setMobileOpen] = useState(false);

	// STUB: toggle drawer
	// const handleDrawerToggle = () => {
	// 	setMobileOpen(!mobileOpen);
	// };

	return (
		<>
			<Navbar
			// drawerWidth={drawerWidth}
			// handleDrawerToggle={handleDrawerToggle}
			/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="pricing" element={<Pricing />} />
				<Route
					element={
						<OutletWrapper
						// drawerWidth={drawerWidth}
						// mobileOpen={mobileOpen}
						// handleDrawerToggle={handleDrawerToggle}
						/>
					}
				>
					<Route path="study-plan" element={<StudyPlan />} />
					<Route path="take-a-test" element={<TakeATest />} />
				</Route>
				<Route path="take-a-test/:id" element={<Test />} />
				<Route path="signup" element={<SignUp />} />
				<Route path="signin" element={<SignIn />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
};

export default App;
