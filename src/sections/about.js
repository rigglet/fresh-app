//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import profileImage from "../img/profile.png";
import StyledLine from "../styles/styledLine";
//animations
import {
  fadeInOut,
  slideLeft,
  scaleUpRight,
  slideUp,
} from "../styles/animations";

const About = ({ aboutRef, aboutControls }) => {
  return (
    <AboutSection ref={aboutRef}>
      <motion.div
        variants={fadeInOut}
        initial="initial"
        animate={aboutControls}
        className="section-header"
      >
        <div className="section-title-content">
          <h1 className="section-heading heading-dark">About me</h1>
        </div>
        <StyledLine height="6px" width="100%" bgcolor="#f5f5f5" />
      </motion.div>

      <div className="content">
        <motion.div
          className="profile-container"
          variants={scaleUpRight}
          initial="initial"
          animate={aboutControls}
        >
          <motion.img
            className="profile-image"
            src={profileImage}
            alt="Author of portfolio"
          />
        </motion.div>

        {/* <motion.div
          variants={fadeInOut}
          initial="initial"
          animate={aboutControls}
          className="copy"
        > */}
          <motion.article
            variants={slideUp}
            initial="initial"
            animate={aboutControls}
            className="content-section"
          >
            <p className="hi">Hi, I'm</p>
            <div className="name">
              <p>
                <span className="first">Neil </span>
              </p>
              <p className="last">
                <span>Rigg</span>
                <span className="dot">.</span>
              </p>
            </div>
          </motion.article>
          
          <motion.article
            variants={slideLeft}
            initial="initial"
            animate={aboutControls}
            className="content-section"
          >
            <p>
              I am a graduate with a&nbsp;
              <span className="highlight">
                BSc in Computer Systems and Networks
              </span>
              &nbsp;with&nbsp;
              <span className="highlight">
                years of relevant industry experience
              </span>
              &nbsp; in IT and the full software development life-cycle. From
              requirements gathering, to designing and building systems in
              response to the needs of the customer.
            </p>
            <p>
              Most recently, I have been expanding my knowledge of fundamental web technologies and building a portfolio of projects, including full-stack web applications with the <span className="highlight">MERN stack,</span> focusing on using <span className="highlight">React</span> for frontend development.
            </p>
          </motion.article>
        {/* </motion.div> */}
      </div>
    </AboutSection>
  );
};

const AboutSection = styled(motion.div)`
  padding: 0 5rem;
  transition: all 2s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  
  .content {
    width: 100%;
    display: flex;
    padding: 1rem 0;
    column-gap: 1rem;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    row-gap: 1rem;
    flex-grow: 1;
    z-index: 10;
    
    /* & > * {
      flex: 0 0 33.3333%;
    } */

    .profile-container {
      display: flex;
      max-width: 350px;
      border-radius: 50%;
      border: 4px solid #313131;
      background: whitesmoke;
      aspect-ratio: 1/1;
      column-gap: 1rem;
      
      .profile-image {
        width: 100%;
        max-height: 100%;
        border-radius: 50%;
        padding: 8px;
        object-fit: scale-down;
        object-position: center;
      }
    }
      .content-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0.5rem;
        font-weight: 200;
        text-align: justify;
        //font-size: 1.4rem;
        font-size: clamp(1.2rem, 1.5vw, 10rem);
        height: 100%;
        row-gap: 1rem;
        height: auto;
        flex: 0 0 20%;
        
        &:nth-of-type(2){
          min-width: 350px;
          flex: 1 0 46%;
        }
      }

      .highlight {
        font-weight: 600;
        color: #313131;
      }
      .hi {
        font-size: 2rem;
      }
      .first {
        display: inline-block;
        font-size: 4rem;
        color: #689ed0;
        color: #313131;
        font-weight: 700;
        width: 100%;
        line-height: 70px;
      }
      .last {
        font-size: 6rem;
        color: #689ed0;
        font-weight: 700;
        width: 100%;
        line-height: 70px;
      }
      .dot {
        font-size: 6rem;
        color: #313131;
        font-weight: 700;
        width: 100%;
        line-height: 0;
      }
    }

  //#### RESPONSIVE SECTION ####
  //1000px: non-desktop devices
  @media screen and (max-width: 1000px) {
    padding: 0rem 1rem;
    transition: padding 2s ease;
`;

export default About;
