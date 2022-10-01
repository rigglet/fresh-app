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

        <motion.div
          variants={fadeInOut}
          initial="initial"
          animate={aboutControls}
          className="copy"
        >
          <motion.article
            variants={slideUp}
            initial="initial"
            animate={aboutControls}
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
          >
            <p>
              I am a graduate with a&nbsp;
              <span className="highlight">
                BSc in Computer Systems and Networks
              </span>
              &nbsp;with&nbsp;
              <span className="highlight">
                over 5 years of relevant industry experience
              </span>
              &nbsp; in the full software development life-cycle. From
              requirements gathering, to designing and building systems in
              response to the needs of the customer.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </AboutSection>
  );
};

const AboutSection = styled(motion.div)`
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;

  .content {
    display: grid;
    grid-template-columns: 30% auto;
    grid-template-rows: 400px;
    grid-column-gap: 3rem;
    padding: 1rem 0;

    .profile-container {
      grid-column: 1 / 1;
      grid-row: 1;
      width: 400px;
      height: 400px;
      overflow: hidden;
      border-radius: 50%;
      border: 4px solid #313131;
      background: whitesmoke;
      display: block;
      align-self: center;
      justify-self: center;

      .profile-image {
        width: 100%;
        max-height: 100%;
        border-radius: 50%;
        padding: 8px;
        object-fit: scale-down;
        object-position: center;
      }
    }

    .copy {
      grid-column: 2 / 2;
      grid-row: 1;
      height: 100%;
      width: auto;
      display: flex;
      align-items: center;
      column-gap: 4rem;

      article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0.5rem;
        font-weight: 200;
        text-align: justify;
        font-size: 1.5rem;
        height: 100%;

        &:first-of-type {
          row-gap: 1rem;
        }

        .highlight {
          font-weight: 600;
          //color: #689ed0;
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
    }
  }

  //#### RESPONSIVE SECTION ####
  //320px — 480px: Mobile devices
  @media screen and (max-width: 480px) and (orientation: portrait) {
    padding: 0rem 1rem;

    .content {
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .profile-container {
        display: block;
        width: 300px;
        height: 300px;
      }

      .copy {
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        article {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0.5rem;
          font-weight: 200;
          text-align: justify;
          font-size: 1.5rem;
          height: 100%;

          &:first-of-type {
            margin: 1rem 0;
            display: block;
            text-align: center;
            .name {
              display: flex;
              column-gap: 1rem;
            }
          }

          .hi {
            font-size: 2rem;
          }
          .first,
          .last {
            font-size: 3rem;
            line-height: 40px;
          }
          .dot {
            font-size: 3rem;
          }
        }
      }
    }
  }

  //320px — 480px: Mobile devices
  @media screen and (max-width: 850px) and (orientation: landscape) {
    height: auto;
    padding: 0 2.5rem;
    //z-index: 20;

    .content {
      margin-top: 1rem;
      row-gap: 1rem;

      .profile-container {
        display: block;
        width: 300px;
        height: 300px;
      }

      .copy {
        flex-direction: column;
        row-gap: 1rem;

        article {
          padding: 0.25rem;
          font-size: 0.75rem;

          .highlight {
            font-weight: 600;
            //color: #689ed0;
          }
        }

        .first {
          display: inline-block;
        }
        .last,
        .dot {
          font-size: 3rem;
        }
        .hi {
          font-size: 1rem;
        }
      }
    }
  }

  //481px — 768px: iPads, Tablets
  @media screen and (min-width: 481px) and (max-width: 769px) and (orientation: portrait),
    screen and (min-width: 481px) and (max-width: 769px) and (orientation: landscape),
    screen and (min-width: 1024px) and (max-width: 1200px) and (orientation: portrait),
    screen and (min-width: 1024px) and (max-width: 1200px) and (orientation: landscape) {
    padding: 0rem 1rem;

    .content {
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .profile-container {
        display: block;
        width: 300px;
        height: 300px;
      }

      .copy {
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        article {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0.5rem;
          font-weight: 200;
          text-align: justify;
          font-size: 1.5rem;
          height: 100%;

          &:first-of-type {
            margin: 1rem 0;
            display: block;
            text-align: center;
            .name {
              display: flex;
              column-gap: 1rem;
            }
          }

          .hi {
            font-size: 2rem;
          }
          .first,
          .last {
            font-size: 3rem;
            line-height: 40px;
          }
          .dot {
            font-size: 3rem;
          }
        }
      }
    }
  }
`;

export default About;
