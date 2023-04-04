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
import { AuthContextProvider, UserAuth } from "./context/AuthContext";
import Protected from "./protectedRoutes/ProtectedRoutes";

const App = () => {
	return (
		<>
			<AuthContextProvider>
			<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
						<Route path="pricing" element={<Protected><Pricing /></Protected>} />
						<Route element={<Protected><OutletWrapper /></Protected>}>
							<Route path="study-plan" element={<Protected><StudyPlan /></Protected>} />
							<Route path="take-a-test" element={<Protected><TakeATest /></Protected>} />
							<Route path="test" element={<Protected><Test /></Protected>} />
						</Route>
					<Route path="signup" element={<SignUp />} />
					<Route path="signin" element={<SignIn />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</AuthContextProvider>
		</>
	);
};

export default App;
