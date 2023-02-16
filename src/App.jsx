import { Routes, Route } from "react-router-dom"
import Error from "./views/Error"
import Home from "./views/Home"
import LogIn from "./views/LogIn"
import Pricing from "./views/Pricing"
import SignUp from "./views/SignUp"
import StudyPlan from "./views/StudyPlan"
import TakeATest from "./views/TakeATest"

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="study-plan" element={<StudyPlan />} />
      <Route path="take-a-test" element={<TakeATest />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
