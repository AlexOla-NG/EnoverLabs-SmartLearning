import { Routes, Route } from "react-router-dom";
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

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="pricing" element={<Pricing />} />
				<Route element={<OutletWrapper />}>
					<Route path="study-plan" element={<StudyPlan />} />
					<Route path="take-a-test" element={<TakeATest />} />
					<Route path="take-a-test/:id" element={<Test />} />
				</Route>
				<Route path="signup" element={<SignUp />} />
				<Route path="signin" element={<SignIn />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
};

export default App;
