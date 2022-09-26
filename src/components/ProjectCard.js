import { useEffect, useState } from "react";
import { serverBaseURL } from "../config/config";

//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//uuid
import { v4 as uuidv4 } from "uuid";
//default image
//import defaultImage from "../img/coding_screens.svg";
//functions
import Icon from "./Icon";
import { HiLink } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

const ProjectCard = ({
  project,
  handleProjectClick,
  explorer = false,
  portfolio = false,
  showStar = false,
  allIcons,
}) => {
  const [mainImage, setMainImage] = useState({});

  useEffect(() => {
    setMainImage(
      project.screenshots?.filter((image) => {
        return image._id === project?.mainImage;
      })[0]
    );
  }, [project.mainImage, project.screenshots]);

  //console.log({ mainImage });

  return (
    <StyledCard>
      <div className="overlay" onClick={() => handleProjectClick(project)}>
        <h2>More detail...</h2>
        <Icon
          key={uuidv4()}
          icon="CgDetailsMore"
          color="whitesmoke"
          size="100px"
          allIcons={allIcons}
        />
        <div className="links">
          {project.githubLink && (
            <a
              key={uuidv4()}
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <button className="project-card-link-btn">
                <FaGithubSquare
                  title="Open project in github"
                  className="project-card-link-btn-icon"
                  size="25px"
                />
                View code
              </button>
            </a>
          )}
          {project.website && (
            <a
              key={uuidv4()}
              href={project.website}
              target="_blank"
              rel="noreferrer"
            >
              <button className="project-card-link-btn">
                <HiLink
                  title="Open live project website"
                  className="project-card-link-btn-icon"
                  size="25px"
                />
                View live
              </button>
            </a>
          )}
        </div>
      </div>
      {/* END OF OVERLAY */}

      {/* START OF CARD */}
      <div className="image-container">
        {project.featured && showStar && (
          <Icon
            icon="FaStar"
            color="gold"
            size="25px"
            title="Featured project"
            className="featured"
            allIcons={allIcons}
          />
        )}
        {/* {project.screenshots[0]?.fileName ? (
          <img
            src={`${serverBaseURL()}/images/${
              project.screenshots[0]?.fileName
            }`}
            alt="project"
          />
        ) : (
          <Icon icon="BsImageFill" color="#65617d" size="50%" title="project" />
        )} */}
        {mainImage?.fileName ? (
          <img
            src={`${serverBaseURL()}/images/${mainImage?.fileName}`}
            alt="project"
          />
        ) : (
          <Icon
            icon="BsImageFill"
            color="#65617d"
            size="50%"
            title="project"
            allIcons={allIcons}
          />
        )}
      </div>
      <div className="information">
        <h4
          className={
            portfolio ? "project-name light-text" : "project-name dark-text"
          }
        >
          {project.projectName}
        </h4>
        <h5
          className={
            portfolio
              ? "project-description light-text"
              : "project-description dark-text"
          }
        >
          {project.shortDescription}
        </h5>
      </div>
      <div className={portfolio ? "technologies-show" : "technologies-hide"}>
        <StyledIcons>
          {project.technologies.map((tech) => (
            // <a
            //   key={uuidv4()}
            //   href={tech.address}
            //   target="_blank"
            //   rel="noreferrer"
            // >
            <Icon
              key={uuidv4()}
              icon={tech.icon}
              color={tech.color}
              size="30px"
              allIcons={allIcons}
            />
            // </a>
          ))}
        </StyledIcons>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  position: relative;
  max-width: 300px;
  min-width: 300px;
  //background-color: transparent;
  border-radius: 10px;
  border: 2px solid #689ed0;
  //border-left: 2px solid #689ed0;
  //border-right: 2px solid #689ed0;
  //background-color: whitesmoke;
  //margin: 2rem;
  //box-shadow: 0px 0px 150px rgba(101, 97, 125, 1);

  .overlay {
    //box-shadow: 0px 5px 10px rgba(101, 97, 125, 1);
    color: var(--color-light-text);
    border-radius: 10px;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(1.05);
    background-color: rgba(101, 97, 125, 75%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    opacity: 0;
    transition: 0.75s ease-in-out;
    border-bottom: 2px solid #65617d;
    h2 {
      font-weight: bold;
    }
  }
  .overlay:hover {
    opacity: 1;
    background-color: rgba(101, 97, 125, 100%);
    transition: 0.25s ease-in-out;
  }

  .technologies-show {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    //border-bottom: 2px solid #689ed0;
    border-top: 2px solid #689ed0;
    //border-right: 2px solid #689ed0;
  }
  .technologies-hide {
    display: none;
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    min-height: 175px;
    border: 0;
    //margin-bottom: 1rem;

    img {
      border-radius: 10px 10px 0px 0px;
      border: none;
      cursor: pointer;
      width: 100%;
      //min-height: 25vh;
      object-fit: scale-down;
      object-position: top;
      padding: 0.25rem;
    }

    .featured {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      width: auto;
      height: auto;
      padding: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .links {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: whitesmoke;

    .project-card-link-btn {
      font-weight: bold;
      font-family: "Inter", sans-serif;
      font-size: 1rem;
      cursor: pointer;
      padding: 1rem 3rem;
      //color: #689ed0;
      border-radius: 10px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 1rem;
      max-width: 200px;
      background: #65617d;
      border: 2px solid white;
      padding: 0.5rem;
      font-size: 10pt;
      //text-transform: none;
      color: whitesmoke;
      transition: all 0.75s ease;
      &:hover {
        background: whitesmoke;
        color: #65617d;
        transition: all 0.25s ease;
        box-shadow: none;
      }
      &:hover .project-card-link-btn-icon {
        background: transparent;
        color: #65617d;
        transition: all 0.25s ease;
        box-shadow: none;
      }
    }

    a {
      text-decoration: none;
      &:hover {
        color: whitesmoke;
      }
    }

    /* .icon {
      color: whitesmoke;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0.25rem;
    }
    .icon:hover {
      color: whitesmoke;
    } */
  }

  .information {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: #313131;

    .project-name {
      margin-top: 1rem;
      padding: 0.5rem;
      color: whitesmoke;
      font-size: 14pt;
      font-weight: 500;
      &.light-text {
        color: whitesmoke;
      }
      &.dark-text {
        color: #313131;
      }
    }

    .project-description {
      padding: 1rem;
      color: whitesmoke;
      font-size: 12pt;
      font-weight: 300;
      &.light-text {
        color: whitesmoke;
      }
      &.dark-text {
        color: #313131;
      }
    }
  }
`;

const StyledIcons = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  column-gap: 0.5rem;
  padding: 0.5rem;
`;

export default ProjectCard;
