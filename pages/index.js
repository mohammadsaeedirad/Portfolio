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
  const schema = {
    
      "@context": "https://schema.org",
      "@type": "Person",
      "email": "MohammadSaediradd@gmail.com",
      "image": "/mohammadsaeedirad.png",
      "jobTitle": "Front-End, React developer",
      "name": "Mohammad Saeedi Rad",
      "telephone": "+989203185480",
      "url": "https://mohammadsaeedirad.com"
  
  };
  return (
    <>
    <Meta title="mohammad saeedi rad" schema={schema} description="I'm mohammad saeedi rad, a frontend,javascript and react developer | instagram: mohammadsaeedi.web" indexed="true" />
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
