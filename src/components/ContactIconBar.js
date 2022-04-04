/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */

import { useState, useEffect } from "react";
//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Icon from "./Icon";

//data
import { getCollection } from "../api/api";

/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
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
        <a key={uuidv4()} target="_blank" rel="noreferrer" href={link.address}>
          <Icon
            icon={link.icon}
            color={color}
            size={size}
            allIcons={allIcons}
          />
        </a>
      ))}
    </StyledBar>
  );
};

const StyledBar = styled(motion.div)`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  border-radius: 10px;
  background: ${({ bgcolor }) => bgcolor};
  padding: 0.5rem;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`;

export default ContactIconBar;
