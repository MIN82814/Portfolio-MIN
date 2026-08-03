import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      <Footer />
    </>
  );
}
export default App;
