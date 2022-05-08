import { Container, Nav, NavDropdown, Button, Navbar } from "react-bootstrap";
import WelcomPage from "./pages/WelcomPage/welcomPage";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <WelcomPage/>
    </Router>
  );
}

export default App;