//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";
import Icon from "../components/Icon";
//import mortarImage from "../img/mortarboard.svg";
import hertsImage from "../img/hertfordshire_university.jpg";
import collegeImage from "../img/college.jpg";
import schoolImage from "../img/school.jpg";
//import { fadeInOut } from "../styles/animations";
import Card from "../components/Card";

const Education = ({ educationRef, educationControls, allIcons }) => {
  
  const cardData = [
    {
      place: "High School",
      name: "Caister High School",
      image: schoolImage,
      stats: 8,
      content: [],
      qualifications: [
        {
          type: "GCSEs",
          subjects: [
            { name: "Information Technology", result: "A", content: [] },
            { name: "Maths", result: "B", content: [] },
            { name: "English Language", result: "C", content: [] },
            { name: "English Literature", result: "C", content: [] },
          ]
        }
      ],
    },

    {
      place: "College",
      name: "East Norfolk Sixth Form College",
      image: collegeImage,
      stats: 4,
      content: ["Data structures and algorithms"],
      qualifications: [
        {
          type: "A-Levels",
          subjects: [
            { name: "Computing", result: "Pass", content: ["Data structures and algorithms"] },
            { name: "Physics", result: "Pass", content: [] },
            { name: "Social & Environmental Biology", result: "Pass", content: [] },
          ]
        },
        {
          type: "AS-Levels",
          subjects: [
            { name: "General Studies", result: "Pass", content: [] },
          ]
        }
      ]
    },
    {
      place: "University",
      name: "University of Hertfordshire",
      image: hertsImage,
      stats: 1,
      content: [
                "Software systems design",
                "Programming (C++)",
                "OOP Programming (Java)",
                "Computer architecture",
                "Computer science fundamentals",
                "Web services using SOAP",
                "Web development (.NET / PHP)",
                "Networks",
              ],
      qualifications: [
        {
          type: "BSc (Hons) Degree",
          subjects: [
            {
              name: "Computer Systems & Networks",
              result: "Pass",
              content: [
                "Software systems design",
                "Programming (C++)",
                "OOP Programming (Java)",
                "Computer architecture",
                "Computer science fundamentals",
                "Web services using SOAP",
                "Web development (.NET / PHP)",
                "Networks",
              ]
            }
          ]
        }
      ]
    }
  ]

  return (
    <EducationSection ref={educationRef}>
      <div className="section-header">
        <div className="section-title-content">
          <Icon
            icon="IoSchool"
            size="30px"
            color="whitesmoke"
            title="Education icon"
            allIcons={allIcons}
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
        {
          cardData.map(institution => <Card data={institution}/>)
        }
      </div>
    </EducationSection>
  );
};

const EducationSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0rem 0rem 0rem;
  height: auto;
  width: 100%;
  
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 2rem;
    column-gap: 2rem;
    color: var(--color-dark-text);
    height: auto;
    width: 100%;
    padding: 2rem 0;
  }
`;

export default Education;
