import "./styles/main.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/Contact";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import ProjectPrivate from "./pages/ProjectPrivate";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path="*" element={<HomePage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/contacts" element={<ContactPage/>}/>
          <Route path="/project/:id" element={<ProjectPrivate/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;
