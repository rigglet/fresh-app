
import { useState, useEffect } from "react";
//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Icon from "./Icon";

//data
import { getCollection } from "../api/api";

const ContactIconBar = ({ size, color, bgcolor, allIcons }) => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    async function getLinks() {
      return await getCollection("links");
    }

    getLinks().then((results) => {
      if (results.status === 200) {
        setLinks(results.data);
        //console.log(results.data);
      }
    });
  }, []);

  return (
    <StyledBar bgcolor={bgcolor}>
      {links.map((link) => (
        <div className="contact-item">
          <a key={uuidv4()} target="_blank" rel="noreferrer" href={link.address}>
            <Icon
              icon={link.icon}
              color={color}
              size={size}
              allIcons={allIcons}
              />
            <h6>{link.name}</h6>
            <p className="address">{link.address}</p>
          </a>
        </div>
      ))}
    </StyledBar>
  );
};

const StyledBar = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  column-gap: 2rem;
  flex-wrap: wrap;
  background: ${({ bgcolor }) => bgcolor};
  background: #111111;
  background: transparent;
  //padding: 0.5rem;
  
  .contact-item {
    background: ${({ bgcolor }) => bgcolor};
    background: #2b2b37;
    color: var(--color-light-text);
    padding: 1.5rem;
    border-radius: 10px;
    cursor: pointer;
    flex-grow: 1;
    
    &:hover {
      background: var(--gradient-ltr-45);
    }
    
    a {
      display: flex;
      flex-direction: column;
      align-items: space-between; 
      row-gap: 0.75rem;
      text-decoration: none;
      color: var(--color-light-text);
    }
    h6 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.75rem;
    }
    
    

  }
`;

export default ContactIconBar;
