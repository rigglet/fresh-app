import { useState, useEffect } from "react";

//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";
// import {
//   fadeInOut,
//   elementSlideInOut,
//   projectsSlideInOutLeft,
// } from "../styles/animations";

//components
import Projects from "../components/Projects";
import PortfolioExplorer from "../components/PortfolioExplorer";
import Loader from "../components/Loader";
import Icon from "../components/Icon";
//data
import { getCollection } from "../api/api";
import { buttonVariants } from "../styles/animations";

const Portfolio = ({
  portfolioRef,
  portfolioControls,
  //portfolioInView,
  allIcons,
  showNav
}) => {
  const [loading, setLoading] = useState(true);
  const [showFull, setShowFull] = useState(false);
  const [projects, setProjects] = useState([]);

  async function getProjects() {
    return await getCollection("projects");
  }

  useEffect(() => {
    getProjects()
      .then((results) => {
        if (results.status === 200) {
          setProjects(() => results.data);
        }
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const featuredProjects = projects.filter((project) => {
    return project.featured === true && project.included === true;
  });

  const handleExploreClick = () => {
    setShowFull(true);
  };

  return (
    <PortfolioSection ref={portfolioRef} showNav={showNav}>
      <div className="section-header">
        <div className="section-title-content">
          <Icon
            icon="MdWeb"
            size="30px"
            color="whitesmoke"
            title="Projects icon"
            allIcons={allIcons}
          />
          <h1 className="section-heading heading-light">Featured Projects</h1>
        </div>
        <StyledLine height="6px" width="25%" bgColor="#111111" />
      </div>
      <div className="content">
        {loading ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            <div className="projects">
              {featuredProjects.length > 0 ? (
                <Projects
                  projects={featuredProjects}
                  portfolio={true}
                  showStar={false}
                  allIcons={allIcons}
                />
              ) : (
                <h1 className="noresult">No projects to show.</h1>
              )}
            </div>

            <motion.button
              className="page-btn dark-btn"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleExploreClick}
            >
              Explore Full Portfolio
            </motion.button>
          </>
        )}
        {showFull && (
          <PortfolioExplorer
            explorer={true}
            setShowFull={setShowFull}
            allIcons={allIcons}
          />
        )}
      </div>
    </PortfolioSection>
  );
};

const PortfolioSection = styled(motion.div)`
  //added to center styledLine
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //added to center styledLine

  padding: 4rem 4rem 4rem 4rem;
  padding: ${({ showNav }) => (showNav ? "4rem" : "4rem")};
  min-height: 93vh;
  height: auto;
  width: 100%;

  .hi {
    font-size: 5rem;
    color: white;
  }
  .content {
    height: 100%;
    height: auto;
    min-height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .projects {
    width: 100%;
  }
  .noresult {
    padding-top: 1rem;
    color: var(--color-light-text);
    text-align: center;
    font-weight: lighter;
  }
`;

export default Portfolio;
