import WelcomPage from "./pages/WelcomPage/welcomPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainpage/MainPage";

function App() {
  return (
    <Router>
      <WelcomPage />
    </Router>
  );
}

export default App;
