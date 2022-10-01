import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import { splashVariants } from "../styles/animations";
import Name from "../img/name";
import Tagline from "../img/tagline";

const Splash = () => {
  const [finished, setfinished] = useState(false);

  const change = async () => {
    setTimeout(() => {
      setfinished(true);
    }, 8000);
  };

  useEffect(() => {
    change();
  }, [finished]);

  return (
    <SplashLayout variants={splashVariants} initial="initial" exit="exit">
      {finished ? (
        <div>
          <Redirect to="/" />
        </div>
      ) : (
        <>
          <Name />
          <Tagline />
        </>
      )}
    </SplashLayout>
  );
};

const SplashLayout = styled(motion.div)`
  background: #111111;
  color: whitesmoke;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @keyframes path-animation {
    to {
      stroke-dashoffset: 0;
    }
  }

  #neilrigg path:nth-of-type(1) {
    stroke-dasharray: 1211.67138671875;
    stroke-dashoffset: 1211.67138671875;
    animation: path-animation 2s ease-in forwards 0.5s;
  }

  #neilrigg path:nth-of-type(2) {
    stroke-dasharray: 524.2862548828125;
    stroke-dashoffset: 524.2862548828125;
    animation: path-animation 2s ease-in forwards 3s;
  }

  #neilrigg path:nth-of-type(3) {
    stroke-dasharray: 491.8753356933594;
    stroke-dashoffset: 491.8753356933594;
    animation: path-animation 2s ease-in forwards 3s;
  }

  #neilrigg path:nth-of-type(4) {
    stroke-dasharray: 429.23455810546875;
    stroke-dashoffset: 429.23455810546875;
    animation: path-animation 2s ease-in forwards 3s;
  }

  #neilrigg path:nth-of-type(5) {
    stroke-dasharray: 861.8509521484375;
    stroke-dashoffset: 861.8509521484375;
    animation: path-animation 2s ease-in forwards 0.5s;
  }

  #neilrigg path:nth-of-type(6) {
    stroke-dasharray: 491.8754577636719;
    stroke-dashoffset: 491.8754577636719;
    animation: path-animation 2s ease-in forwards 3s;
  }

  #neilrigg path:nth-of-type(7) {
    stroke-dasharray: 652.998046875;
    stroke-dashoffset: 652.998046875;
    animation: path-animation 2s ease-in forwards 3s;
  }

  #neilrigg path:nth-of-type(8) {
    stroke-dasharray: 652.998046875;
    stroke-dashoffset: 652.998046875;
    animation: path-animation 2s ease-in forwards 3s;
  }

  #webdev path:nth-of-type(1) {
    stroke-dasharray: 534.0951538085938;
    stroke-dashoffset: 534.0951538085938;
    animation: path-animation 2s ease-in forwards 5s;
  }
  #webdev path:nth-of-type(2) {
    stroke-dasharray: 343.50872802734375;
    stroke-dashoffset: 343.50872802734375;
    animation: path-animation 2s ease-in forwards 5s;
  }
  #webdev path:nth-of-type(3) {
    stroke-dasharray: 374.6701965332031;
    stroke-dashoffset: 374.6701965332031;
    animation: path-animation 2s ease-in forwards 5s;
  }
  #webdev path:nth-of-type(4) {
    stroke-dasharray: 374.26702880859375;
    stroke-dashoffset: 374.26702880859375;
    animation: path-animation 2s ease-in forwards 5s;
  }
  #webdev path:nth-of-type(5) {
    stroke-dasharray: 343.50927734375;
    stroke-dashoffset: 343.50927734375;
    animation: path-animation 2s ease-in forwards 5s;
  }
  #webdev path:nth-of-type(6) {
    stroke-dasharray: 236.832275390625;
    stroke-dashoffset: 236.832275390625;
    animation: path-animation 2s ease-in forwards 5s;
  }
  #webdev path:nth-of-type(7) {
    stroke-dasharray: 343.5094909667969;
    stroke-dashoffset: 343.5094909667969;
    animation: path-animation 2s ease-in forwards 5s;
  }
  #webdev path:nth-of-type(8) {
    stroke-dasharray: 159.552001953125;
    stroke-dashoffset: 159.552001953125;
    animation: path-animation 2s ease-in forwards 5s;
  }
  #webdev path:nth-of-type(9) {
    stroke-dasharray: 289.1817932128906;
    stroke-dashoffset: 289.1817932128906;
    animation: path-animation 2s ease-in forwards 5s;
  }
  #webdev path:nth-of-type(10) {
    stroke-dasharray: 387.5021667480469;
    stroke-dashoffset: 387.5021667480469;
    animation: path-animation 2s ease-in forwards 5s;
  }
  #webdev path:nth-of-type(11) {
    stroke-dasharray: 343.5091552734375;
    stroke-dashoffset: 343.5091552734375;
    animation: path-animation 2s ease-in forwards 5s;
  }
  #webdev path:nth-of-type(12) {
    stroke-dasharray: 164.016357421875;
    stroke-dashoffset: 164.016357421875;
    animation: path-animation 2s ease-in forwards 5s;
  }
`;

export default Splash;
