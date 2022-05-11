import WelcomPage from "./pages/WelcomPage/welcomPage";
import { BrowserRouter as Router } from "react-router-dom";
import "./pages/SignUp/signUpPage.css";

function App() {
  return (
    <Router>
      <WelcomPage />
    </Router>
  );
}

export default App;
