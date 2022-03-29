import Section from "./components/section";
import Container from "./components/container";
import Home from "./sections/home";
import About from "./sections/about";
import Education from "./sections/education";
import Experience from "./sections/experience";
//import Contact from "./sections/contact";
import Portfolio from "./sections/portfolio";
import Skills from "./sections/skills";

import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
//import Splash from "./pages/Splash";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import useScroll from "./components/useScroll";
//import useHideNav from "./components/useHideNav";

function App() {
  const [homeRef, homeControls, homeInView] = useScroll();
  const [aboutRef, aboutControls, aboutInView] = useScroll();
  const [portfolioRef, portfolioControls, portfolioInView] = useScroll();
  const [skillsRef, skillsControls, skillsInView] = useScroll();
  const [educationRef, educationControls, educationInView] = useScroll();
  const [experienceRef, experienceControls, experienceInView] = useScroll();
  //const [contactRef, contactControls, contactInView] = useScroll();

  const elementRef = useRef();

  return (
    <div className="app" ref={elementRef}>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Nav
                  homeInView={homeInView}
                  aboutInView={aboutInView}
                  portfolioInView={portfolioInView}
                  skillsInView={skillsInView}
                  educationInView={educationInView}
                  experienceInView={experienceInView}
                  //contactInView={contactInView}
                />
                <Section id="home" full>
                  <Container full dark>
                    <Home homeRef={homeRef} homeControls={homeControls} />
                  </Container>
                </Section>
                <Section id="about" full>
                  <Container light>
                    <About aboutRef={aboutRef} aboutControls={aboutControls} />
                  </Container>
                </Section>
                <Section id="portfolio">
                  <Container dark>
                    <Portfolio
                      portfolioRef={portfolioRef}
                      portfolioControls={portfolioControls}
                    />
                  </Container>
                </Section>
                <Section id="skills">
                  <Container light>
                    <Skills
                      skillsRef={skillsRef}
                      skillsControls={skillsControls}
                    />
                  </Container>
                </Section>
                <Section id="education">
                  <Container dark>
                    <Education
                      educationRef={educationRef}
                      educationControls={educationControls}
                    />
                  </Container>
                </Section>
                <Section id="experience">
                  <Container light>
                    <Experience
                      experienceRef={experienceRef}
                      experienceControls={experienceControls}
                    />
                  </Container>
                </Section>
                {/* <Section id="contact" full>
                  <Container dark>
                  <Contact
                  contactRef={contactRef}
                  contactControls={contactControls}
                  />
                  </Container>
                </Section> */}
              </>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
