import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./Pages/AboutMe/AboutMe.tsx";
import Contacts from "./Pages/Contacts/Contacts.tsx";
import Projects from "./Pages/Projects/Projects.tsx";
import Navbar from "./Components/Navbar/Navbar.tsx";

function App() {
  return (
    <div className="App">
      <div className="navbarAndContentWrapper">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
