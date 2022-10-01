import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//import { trailVariants } from "../styles/animations";

export default function trail() {
  return (
    <StyledTrail
      // initial={{ pathLength: 0, pathOffset: 1 }}
      // animate={{ pathLength: 1, pathOffset: 0 }}
      // transition={{ duration: 1 }}
      // variants={trailVariants}
      // initial="initial"
      // animate="animate"
      id="trail"
      width="969"
      height="492"
      viewBox="0 0 969 492"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="trailpath"
        d="M3 489.13C3 489.13 456.914 385.872 469.318 256.363C481.723 126.854 221.894 158.775 278.871 277.032C335.848 395.29 410.605 395.29 410.605 395.29C410.605 395.29 472.957 406.373 586.828 322.119C700.7 237.865 713.187 337.12 809.279 155.022C905.37 -27.0755 965.903 4.8429 965.903 4.8429"
        // stroke="#689ED0"
        // stroke-width="5"
        // stroke-linecap="round"
        // stroke-dasharray="25 25"
        stroke="#689ED0"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="25 25"
      />
    </StyledTrail>
  );
}

const StyledTrail = styled(motion.svg)`
  width: 30vw;
  height: 30vh;
`;
