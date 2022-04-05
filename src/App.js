//import * as allIcons from "@react-icons/all-files";
import * as aiIcons from "react-icons/ai";
import * as bsIcons from "react-icons/bs";
import * as biIcons from "react-icons/bi";
import * as fcIcons from "react-icons/fc";
import * as giIcons from "react-icons/gi";
import * as goIcons from "react-icons/go";
import * as grIcons from "react-icons/gr";
import * as ioIcons from "react-icons/io";
import * as io5Icons from "react-icons/io5";
import * as riIcons from "react-icons/ri";
import * as tiIcons from "react-icons/ti";
import * as wiIcons from "react-icons/wi";

import * as cgIcons from "react-icons/cg";
import * as mdIcons from "react-icons/md";
import * as vscIcons from "react-icons/vsc";
import * as hiIcons from "react-icons/hi";
import * as imIcons from "react-icons/im";
import * as siIcons from "react-icons/si";
import * as diIcons from "react-icons/di";
import * as fiIcons from "react-icons/fi";
import * as faIcons from "react-icons/fa";

import Section from "./components/section";
import Container from "./components/container";
import Home from "./sections/home";
import About from "./sections/about";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Contact from "./sections/contact";
import Portfolio from "./sections/portfolio";
import Skills from "./sections/skills";

import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import useScroll from "./components/useScroll";
//import useHideNav from "./components/useHideNav";

function App() {
  const [homeRef, homeControls, homeInView] = useScroll();
  const [aboutRef, aboutControls, aboutInView] = useScroll();
  const [portfolioRef, portfolioControls, portfolioInView] = useScroll();
  const [skillsRef, skillsControls, skillsInView] = useScroll();
  const [educationRef, educationControls, educationInView] = useScroll();
  const [experienceRef, experienceControls, experienceInView] = useScroll();
  const [contactRef, contactControls, contactInView] = useScroll();

  const elementRef = useRef();

  //icons
  let allIcons = {
    ...aiIcons,
    ...bsIcons,
    ...biIcons,
    ...fcIcons,
    ...giIcons,
    ...goIcons,
    ...grIcons,
    ...ioIcons,
    ...io5Icons,
    ...riIcons,
    ...tiIcons,
    ...wiIcons,
    ...cgIcons,
    ...mdIcons,
    ...diIcons,
    ...faIcons,
    ...fiIcons,
    ...hiIcons,
    ...imIcons,
    ...siIcons,
    ...vscIcons,
  };

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
                  contactInView={contactInView}
                  allIcons={allIcons}
                />
                <Section id="home" full>
                  <Container full dark>
                    <Home homeRef={homeRef} homeControls={homeControls} />
                  </Container>
                </Section>
                <Section id="about" full={true}>
                  <Container light={true}>
                    <About aboutRef={aboutRef} aboutControls={aboutControls} />
                  </Container>
                </Section>
                <Section id="portfolio">
                  <Container dark={true}>
                    <Portfolio
                      portfolioRef={portfolioRef}
                      portfolioControls={portfolioControls}
                      portfolioInView={portfolioInView}
                      allIcons={allIcons}
                    />
                  </Container>
                </Section>
                <Section id="skills">
                  <Container light={true}>
                    <Skills
                      skillsRef={skillsRef}
                      skillsControls={skillsControls}
                      allIcons={allIcons}
                    />
                  </Container>
                </Section>
                <Section id="education">
                  <Container dark={true}>
                    <Education
                      educationRef={educationRef}
                      educationControls={educationControls}
                      allIcons={allIcons}
                    />
                  </Container>
                </Section>
                <Section id="experience">
                  <Container light={true}>
                    <Experience
                      experienceRef={experienceRef}
                      experienceControls={experienceControls}
                      allIcons={allIcons}
                    />
                  </Container>
                </Section>
                <Section id="contact" full>
                  <Container dark={true}>
                    <Contact
                      contactRef={contactRef}
                      contactControls={contactControls}
                      allIcons={allIcons}
                    />
                  </Container>
                </Section>
              </>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
