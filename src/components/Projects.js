import { useState } from "react";
//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//import { detailPopUp } from "../styles/animations";
//import useScroll from "../components/useScroll";

//uuid
import { v4 as uuidv4 } from "uuid";

//components
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

const Projects = ({
  projects,
  explorer = false,
  portfolio = false,
  showStar = false,
  allIcons,
}) => {
  //const [element, controls] = useScroll();

  //state
  const [currentProject, setCurrentProject] = useState({});
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  //const [currentImage, setCurrentImage] = useState(null);

  const handleProjectClick = (project) => {
    document.body.style.overflowY = "hidden";
    setCurrentProject(project);
    setShowProjectDetails(true);
  };

  // const handleImageChange = (image) => {
  //   console.log(image);
  //   setCurrentImage(image);
  // };

  const projectClose = () => {
    document.body.style.overflowY = "auto";
    setShowProjectDetails(false);
  };

  return (
    <StyledProjects>
      {showProjectDetails && (
        <ProjectDetail
          id={uuidv4()}
          project={currentProject}
          projectClose={projectClose}
          allIcons={allIcons}
        />
      )}

      {projects.map((project) => (
        <ProjectCard
          key={uuidv4()}
          project={project}
          handleProjectClick={handleProjectClick}
          portfolio={portfolio}
          explorer={explorer}
          showStar={showStar}
          allIcons={allIcons}
        />
      ))}
    </StyledProjects>
  );
};

const StyledProjects = styled(motion.div)`
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-around;
  row-gap: 4rem;
  column-gap: 2rem;
  //gap: 10rem;
  flex-wrap: wrap;
  //overflow-x: scroll;
  color: black;
`;

export default Projects;
