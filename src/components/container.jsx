import { motion } from "framer-motion";
import styled from "styled-components";
import Gradient from "./gradient";

function container({
  full = false,
  half = false,
  light = false,
  dark = false,
  left = false,
  right = false,
  children,
}) {
  return (
    <StyledContainer
      full={full}
      half={half}
      light={light}
      dark={dark}
      left={left}
      right={right}
    >
      {light && <Gradient left={left} right={right} />}
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled(motion.div)`
  position: relative;
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0 0 0;
  //height: ${({ full, half }) => (full ? "93%" : half ? "50%" : "auto")};
  height: ${({ full, half }) => (full ? "100vh" : half ? "50vh" : "auto")};
  //width: ${({ left, right }) => (left || right ? "90vw" : "100vw")};
  width: ${({ left, right }) => (left || right ? "90%" : "100%")};
  min-height: 50vh;

  background-color: ${({ light, dark }) =>
    dark
      ? "var(--color-dark-background)"
      : light
      ? "var(--color-light-background)"
      : "var(--color-dark-background)"};

  border-top: ${({ dark, light }) =>
    dark ? "0" : light ? "0.3rem solid var(--container-light-border)" : "0"};

  border-bottom: ${({ dark, light }) =>
    dark ? "0" : light ? "0.3rem solid var(--container-light-border)" : "0"};

  border-left: ${({ right }) =>
    right ? "0.3rem solid var(--container-light-border)" : "0"};
  border-right: ${({ left }) =>
    left ? "0.3rem solid var(--container-light-border)" : "0"};

  border-radius: ${({ left, right }) =>
    left ? "0 100px 100px 0;" : right ? "100px 0 0 100px;" : "0"};

  //320px — 480px: Mobile devices
  @media screen and (max-width: 850px) and (orientation: portrait) {
    height: auto;
    //border: 1px solid yellow;
    //height: ${({ full, half }) => (full ? "93vh" : half ? "70vh" : "auto")};
  }
  //320px — 480px: Mobile devices
  @media screen and (max-width: 850px) and (orientation: landscape) {
    height: "auto";
    width: "auto";
    //padding: 0;
  }

  //481px — 768px: iPads, Tablets
  @media screen and (min-width: 481px) and (max-width: 769px) and (orientation: portrait) {
    height: "auto";
  }
  //481px — 768px: iPads, Tablets
  @media screen and (min-width: 481px) and (max-width: 769px) and (orientation: landscape) {
    height: "auto";
  }

  //769px — 1024px: Small screens, laptops
  //@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {}
  //769px — 1024px: Small screens, laptops
  //@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {}

  //1025px — 1200px: Desktops, large screens
  @media screen and (min-width: 1024px) and (max-width: 1200px) and (orientation: portrait) {
  }
  //1025px — 1200px: Desktops, large screens
  //@media screen and (min-width: 1024px) and (max-width: 1200px) and (orientation: landscape) {}

  //1201px and more —  Extra large screens, TV
  //@media screen and (min-width: 1201px) and (max-width: 1500px) and (orientation: portrait) {}
  //1201px and more —  Extra large screens, TV
  //@media screen and (min-width: 1201px) and (max-width: 1500px) and (orientation: landscape) {}

  //1501px and more —  Extra large screens, TV
  //@media screen and (min-width: 1501px) and (orientation: portrait) {}
  //1501px and more —  Extra large screens, TV
  @media screen and (min-width: 1921px) and (orientation: landscape) {
  }
`;

export default container;
