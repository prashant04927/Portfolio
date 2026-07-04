import About from "./Components/About";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skill from "./Components/Skill";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Footer from "./Components/Footer";
import Education from "./Pages/Education";
import Certificate from "./Pages/Certificate";
import Experience from "./Pages/Experience";
import Social from "./Components/Social";
import Services from "./Pages/Services";
import Achievements from "./Pages/Achievements";

function App() {
  return (
    <div className="bg-[#0D1117] min-h-screen">
      <Header />
      <Hero/>
      <About/>
      <Skill/>
      <Education/>
      <Experience/>
      <Social/>
      <Certificate/>
      <Services/>
      <project/>
      <Achievements/>
      <Experience/>
      <Footer/>
      
    </div>
  );
}

export default App;