import { useState, useEffect } from "react";

//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//components
import Projects from "../components/Projects";
//data
import { getCollection } from "../api/api";
//import { FaFilter } from "react-icons/fa";

const Portfolio = () => {
  //state
  //const projects = projectData();
  //const allTech = technologies();

  const [allTech, setAllTech] = useState([]);
  const [projects, setProjects] = useState([]);
  const [type, setType] = useState("All");
  const [tech, setTech] = useState("ALL");

  useEffect(() => {
    async function getProjects() {
      return await getCollection("projects");
    }
    async function getTechnologies() {
      return await getCollection("technologies");
    }

    getTechnologies().then((results) => {
      if (results.status === 200) {
        setAllTech(results.data);
      }
    });

    getProjects().then((results) => {
      console.log(results);
      if (results.status === 200) {
        setProjects(results.data);
      }
    });
  }, []);

  const handleTypeChange = (e) => {
    //console.log(e.target.value);
    setType(e.target.value);
  };
  const handleTechChange = (e) => {
    //console.log(e.target.value);
    setTech(e.target.value);
  };

  const filterByType = () => {
    switch (type) {
      case "featured":
        return projects.filter((project) => project.featured === true);
      case "all":
        return [...projects];
      default:
        return [...projects];
    }
  };

  const filterProjects = () => {
    const p = filterByType();
    //console.log(tech);
    if (tech === "ALL") {
      return [...p];
    } else {
      return p.filter((proj) => proj.technologies.includes(tech));
    }
  };
  //console.log(allTech);

  return (
    <PortfolioSection
      className="section fullheight section-dark"
      id="portfolio"
    >
      {/* <h1>Projects</h1> */}
      {/* <div className="gradientLeft" /> */}
      <div className="container">
        <div className="titleBar">
          <div className="options">
            <h4>Total displayed: {filterProjects().length} </h4>
            {/* <FaFilter className="filter" /> */}
            {/* <label class="switch">
          <input type="checkbox" onChange={handleTypeChange} />
          <span class="slider round"></span>
        </label> */}
            <select onChange={handleTypeChange} value={type}>
              <option key="all" value="all">
                All
              </option>
              <option key="featured" value="featured">
                Featured
              </option>
            </select>
            <select onChange={handleTechChange} value={tech}>
              <option value="ALL">ALL</option>
              {allTech.map((tech) => (
                <option value={tech.name} key={tech.name}>
                  {tech.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {filterProjects().length > 0 ? (
          <Projects projects={filterProjects()} />
        ) : (
          <h1 className="noresult">No results to show.</h1>
        )}
      </div>
    </PortfolioSection>
  );
};

const PortfolioSection = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  .container {
    background: #111111;
    //border-radius: 100px 0 0 0;
    width: 100%;
    h1 {
      font-weight: 300;
      font-size: 2rem;
    }
    .titleBar {
      display: flex;
      justify-content: space-between;
      padding: 2rem 2rem 0rem 2rem;
    }
    .options {
      display: flex;
      align-items: center;
      h4 {
        font-weight: lighter;
      }
    }
    .noresult {
      text-align: center;
      padding: 1rem;
      margin-top: 2rem;
      font-weight: lighter;
    }
  }
`;

export default Portfolio;
