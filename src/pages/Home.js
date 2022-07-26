import Header from "./sections/Header";
import Bio from "./sections/Bio";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Bio />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
