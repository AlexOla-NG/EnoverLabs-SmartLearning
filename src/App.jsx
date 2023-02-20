import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./views/Home";
import Pricing from "./views/Pricing";
import StudyPlan from "./views/StudyPlan";
import TakeATest from "./views/TakeATest";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Error from "./views/Error";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="pricing" element={<Pricing />} />
				<Route path="study-plan" element={<StudyPlan />} />
				<Route path="take-a-test" element={<TakeATest />} />
				<Route path="signup" element={<SignUp />} />
				<Route path="signin" element={<SignIn />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
};

export default App;
