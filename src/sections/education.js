//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";
import Icon from "../components/Icon";
//import { fadeInOut } from "../styles/animations";
import Card from "../components/Card";
import { cardData } from "../data/data";
import { v4 as uuidv4 } from 'uuid';

const Education = ({ educationRef, educationControls, allIcons }) => {

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
          cardData.map(institution => <Card key={uuidv4() } data={institution}/>)
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
  padding: 4rem 1rem 0rem 1rem;
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
    perspective: 400px;
    //perspective-origin: 350px 0px;
  }
`;

export default Education;
