import { motion } from "framer-motion";
import styled from "styled-components";

function gradient({ left = false, right = false }) {
  return <StyledGradient left={left} right={right} />;
}

const StyledGradient = styled(motion.div)`
  background-color: "var(--color-light-background)";

  position: absolute;
  top: 0;
  left: ${({ left }) => (left ? "0" : "0")};
  right: ${({ right }) => (right ? "0" : "")};
  height: 100%;
  width: 20%;
  background: ${({ left, right }) =>
    left
      ? "var(--gradient-ltr)"
      : right
      ? "var(--gradient-rtl)"
      : "var(--gradient-ltr)"};
`;

export default gradient;
