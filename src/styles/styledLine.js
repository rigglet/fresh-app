import styled from "styled-components";
import { motion } from "framer-motion";

export default function styledLine({
  height,
  width,
  bgColor,
  initial,
  animate,
  transition,
}) {
  const i = { width: "0%", ...initial };
  const a = {
    width: "100%",
    ...animate,
    transition: {
      ...transition,
    },
  };

  return (
    <StyledLine
      height={height}
      width={width}
      bgcolor={bgColor}
      initial={i}
      animate={a}
    />
  );
}

const StyledLine = styled(motion.div)`
  //background: #689ed0;
  border-radius: 1rem;
  background: linear-gradient(
    90deg,
    #1c3b57 0%,
    #65617d 25%,
    #689ed0 50%,
    #c6c6c6 75%,
    ${({ bgColor }) => (bgColor ? bgColor : "#f5f5f5")} 100%
  );
  height: ${({ height }) => (height ? height : "6px")};
  width: ${({ width }) => (width ? width : "100%")};
`;
