//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";
import Icon from "../components/Icon";
import mortarImage from "../img/mortarboard.svg";
//import { fadeInOut } from "../styles/animations";

const Education = ({ educationRef, educationControls }) => {
  return (
    <EducationSection ref={educationRef}>
      <div className="section-header">
        <div className="section-title-content">
          <Icon
            icon="IoSchool"
            size="30px"
            color="whitesmoke"
            title="Education icon"
          />
          <h1 className="section-heading heading-light">Education</h1>
        </div>

        <StyledLine
          transition={{
            delay: 1,
            duration: 1,
          }}
          height="6px"
          width="100%"
          bgColor="#111111"
        />
      </div>

      <div className="content">
        <div className="card">
          <img className="card-image" src={mortarImage} alt="Motarboard cap" />
          <div className="card-text">
            <span className="place">High School</span>
            <h2>GCSEs</h2>
            <p>Information Technology</p>
            <p>Overview of content</p>
          </div>
          <div className="card-stats">
            <div className="stat">
              <div className="value">8 Total</div>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="card-image" src={mortarImage} alt="Motarboard cap" />
          <div className="card-text">
            <span className="place">College</span>
            <h2>A-Levels</h2>
            <p>Computing</p>
            <p>Data structures and algorithms</p>
          </div>
          <div className="card-stats">
            <div className="stat">
              <div className="value">3 A-levels, 1 AS-Level</div>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="card-image" src={mortarImage} alt="Motarboard cap" />
          <div className="card-text">
            <span className="place">University</span>
            <h2>Degree</h2>
            <p>Computer Systems &amp; Networks (BSc)</p>
            <p>Overview of content</p>
            <p>Software systems design</p>
            <p>Programming (C++)</p>
            <p>OOP Programming (Java)</p>
            <p>Computer architecture</p>
            <p>Computer science fundamentals</p>
            <p>Web services using SOAP</p>
            <p>Web development (.NET / PHP)</p>
            <p>Networks</p>
          </div>
          <div className="card-stats">
            <div className="stat">
              <div className="value">1 degree</div>
            </div>
          </div>
        </div>
      </div>
    </EducationSection>
  );
};

const EducationSection = styled(motion.div)`
  //added to center styledLine
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //added to center styledLine
  padding: 4rem 0rem 0rem 0rem;
  height: auto;
  width: 100%;

  .content {
    color: var(--color-dark-text);
    height: auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-evenly;
    row-gap: 2rem;
    padding: 2rem;
    column-gap: 2rem;

    .card {
      display: grid;
      grid-template-columns: 325px;
      grid-template-rows: 125px auto 80px;
      grid-template-areas: "image" "text" "stats";
      border-radius: 20px;
      background: #f5f5f5;
      text-align: center;
      cursor: pointer;
      transition: transform 0.6s ease;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
      &:hover {
        transition: transform 0.3s ease;
        transform: scale(1.15);
      }
    }
    .card-text {
      grid-area: text;
      margin: 25px;
    }
    .card-text .place {
      color: #1c3b57;
      font-size: 1rem;
    }
    .card-text p {
      color: grey;
      font-size: 15px;
      font-weight: 300;
    }
    .card-text h2 {
      margin-top: 0px;
      font-size: 28px;
    }
    .card-stats {
      grid-area: stats;
      display: flex;
      justify-content: center;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      background: #65617d;
    }

    .card-stats .stat {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: white;
      padding: 10px;
    }
    .card-image {
      grid-area: image;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 1rem 5rem;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }

    .certificate {
      min-width: 25vw;
      height: auto;
      cursor: pointer;
      transition: transform 0.6s ease;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
      &:hover {
        transition: transform 0.3s ease;
        transform: scale(1.15);
      }
      color: #f5f5f5;
      border-radius: 10px;
      background: transparent;
      .info {
        padding: 1rem;
      }
      .stats {
        border: 1px solid #f5f5f5;
        border-radius: 0px 0px 10px 10px;
        width: 100%;
        height: 7vh;
      }
      .stats:nth-of-type(1) {
        background: #689ed0;
      }
      .stats:nth-of-type(2) {
        background: #65617d;
      }
      .stats:nth-of-type(3) {
        background: #1c3b57;
      }
    }
  }
`;

export default Education;
