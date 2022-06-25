import Welcome from "../components/Welcome"
import About from '../components/About';
import Skills from "../components/Skills";
import SocialLinks from "../components/SocialLinks";
import Intrests from "../components/Intrests";
import Footer from "../components/Footer";
import WorkHistory from "../components/WorkHistory";
import Projects from "../components/Projects";
export default function Home() {
  return (
    <>
     <SocialLinks />
     <Welcome />
     <About />
     <Skills />
     <WorkHistory />
     <Projects />
     <Intrests />
     <Footer />
    </>
  
  )
}
