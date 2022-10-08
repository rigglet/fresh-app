import { useEffect, useState  } from "react";
import { serverBaseURL } from "../config/config";

//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//uuid
import { v4 as uuidv4 } from "uuid";
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

  return (
    <StyledCard>
      
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
            onClick={() => handleProjectClick(project)}
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
        <div className="links">
          {project.githubLink && (
            <a
              key={uuidv4()}
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <button className={portfolio
                ? "project-card-link-btn light-text"
                : "project-card-link-btn dark-text"
              }>
                <FaGithubSquare
                  title="Open project in github"
                  className={portfolio
                    ? "project-card-link-btn-icon light-text"
                    : "project-card-link-btn-icon dark-text"
                  }   
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
              <button className={portfolio
                ? "project-card-link-btn light-text"
                : "project-card-link-btn dark-text"
              }>
                <HiLink
                  title="Open live project website"
                  className={portfolio
                    ? "project-card-link-btn-icon light-text"
                    : "project-card-link-btn-icon dark-text"
                  }
                  size="25px"
                />
                View live
              </button>
            </a>
          )}
        </div>
      </div>

      <div className={portfolio ? "technologies-show" : "technologies-hide"}>
        <StyledIcons>
          {project.technologies.map((tech) => (
            <a
              key={uuidv4()}
              href={tech.address}
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                key={uuidv4()}
                icon={tech.icon}
                color={tech.color}
                size="30px"
                allIcons={allIcons}
              />
            </a>
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
  border-radius: 10px;
  border: 2px solid #689ed0;
  
  .technologies-show {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-top: 2px solid #689ed0;
  }
  .technologies-hide {
    display: none;
  }

  .image-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: 10px;
    min-height: 175px;
    
    img {
      border-radius: 10px 10px 0px 0px;
      border: none;
      cursor: pointer;
      width: 100%;
      object-fit: scale-down;
      object-position: top;
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
    padding: 1rem 0;

    .project-card-link-btn {
      font-weight: bold;
      font-family: "Inter", sans-serif;
      font-size: 1rem;
      cursor: pointer;
      padding: 1rem 3rem;
      //font-variant-caps: all-small-caps;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 1rem;
      max-width: 200px;
      background: transparent;
      border: 2px solid var(--section-light-border);
      border-radius: 10px;
      padding: 0.5rem;
      font-size: 10pt;
      color: var(--section-light-border);
      transition: all 0.25s ease;
      &.light-text {
        color: var(--section-light-border);
      }
      &.dark-text {
        color: var(--color-dark-text);
        border: 2px solid var(--color-dark-text);
      }

      &:hover {
        /* color: var(--color-dark-text);
        background: var(--gradient-ltr-45);
        box-shadow: none; */
        &.light-text {
          color: var(--color-dark-text);
          background: var(--gradient-ltr-45);
          box-shadow: none;
        }
        &.dark-text {
          border: 2px solid var(--color-dark-text);
          color: var(--section-light-border);
          background: var(--color-dark-text);
          box-shadow: none;
        }
      }

      
      &:hover .project-card-link-btn-icon {
        &.light-text {
          color: #313131;
          color: var(--color-dark-text);
        }
        &.dark-text {
          color: whitesmoke;
          color: var(--section-light-border);
          //var(--color-dark-text);
        }
      }
    }

    .project-card-link-btn-icon {
      &.light-text {
        var(--section-light-border);
      }
      &.dark-text {
        color: #313131;
        var(--color-dark-text);
      }
    }

    a {
      text-decoration: none;
    }

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
