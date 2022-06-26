import Welcome from "../components/Welcome"
import About from '../components/About';
import Skills from "../components/Skills";
import SocialLinks from "../components/SocialLinks";
import Intrests from "../components/Intrests";
import Footer from "../components/Footer";
import WorkHistory from "../components/WorkHistory";
import Projects from "../components/Projects";
import Meta from "../components/Meta";
export default function Home() {
  return (
    <>
    <Meta title="mohammad saeedi rad" description="mohammad saeedi rad portfolio | resume" indexed="true" />
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
