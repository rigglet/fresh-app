//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";

const loaderVariants = {
  hidden: {
    //opacity: 1,
  },
  show: {
    //opacity: 0,
    transition: {
      staggerChildren: 0.2,
      //when: "afterChildren",
    },
  },
};

const dotVariants = {
  hidden: {
    opacity: 1,
    y: "0",
  },
  show: {
    opacity: 1,
    y: "-25px",
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.7,
    },
  },
};

export default function Loader() {
  return (
    <StyledLoader variants={loaderVariants} initial="hidden" animate="show">
      <StyledDot variants={dotVariants}>l</StyledDot>
      <StyledDot variants={dotVariants}>o</StyledDot>
      <StyledDot variants={dotVariants}>a</StyledDot>
      <StyledDot variants={dotVariants}>d</StyledDot>
      <StyledDot variants={dotVariants}>i</StyledDot>
      <StyledDot variants={dotVariants}>n</StyledDot>
      <StyledDot variants={dotVariants}>g</StyledDot>
    </StyledLoader>
  );
}

const StyledLoader = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 20vw;
  min-height: 30vh;
`;

const StyledDot = styled(motion.h1)`
  font-size: 3rem;
  font-family: "Lobster", cursive;
  color: #f5f5f5;
`;
