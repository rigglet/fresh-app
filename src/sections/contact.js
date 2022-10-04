import { useState } from "react";

//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";
import {
  buttonVariants,
  flyIn,
  planeVariants,
  trailVariants,
  slideRight,
  slideDown,
  slideUp,
} from "../styles/animations";

//email
import emailjs from "emailjs-com";

//message components
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//components
import ContactIconBar from "../components/ContactIconBar";

//icon
import Icon from "../components/Icon";
//SVGs
import Plane from "../img/plane";
import Trail from "../img/trail";

const Contact = ({ contactRef, contactControls, showMenu, allIcons }) => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });

  const notify = (type) => {
    const toastStyle = {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: "0.. 1",
    };
    switch (type) {
      case "SUCCESS":
        toast.dark("Message sent", toastStyle);
        break;
      case "FAILURE":
        toast.dark("Message failed to send", toastStyle);
        break;
      default:
        toast.dark("Nothing to report", toastStyle);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then((result) => {
        if (result.status === 200) {
          //sent message
          setFormData({
            user_name: "",
            user_email: "",
            user_subject: "",
            message: "",
          });
          notify("SUCCESS");
        }
      })
      .catch((err) => {
        console.log(err);
        notify("FAILURE");
      });
  };

  const CloseButton = ({ closeToast, allIcons }) => (
    <Icon
      icon="FaWindowClose"
      color="#689ed0"
      size=""
      title="Close message"
      onClick={closeToast}
      allIcons={allIcons}
    />
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ContactSection ref={contactRef}>
      <ToastContainer
        //closeButton={CloseButton}
        closeButton={false}
        transition={Zoom}
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        />

        <div
          initial="initial"
          variants={slideDown}
          animate={contactControls}
          className="section-header"
          >
          <div className="section-title-content">
            <Icon
              icon="BiMessageRounded"
              size="30px"
              color="whitesmoke"
              title="Contact icon"
              allIcons={allIcons}
              />
            <h1 className="section-heading heading-light">Contact me</h1>
          </div>
          <StyledLine height="6px" width="100%" bgColor="#111111" />
      </div>
      
       <div className="content">
       <div className="contact-information">
        <form
          autoComplete="off"
          onSubmit={handleFormSubmit}
          initial="initial"
          variants={slideRight}
          animate={contactControls}
        >
          <div className="form-item">
            <label>Name:</label>
            <input
              id="name"
              autoComplete="off"
              name="user_name"
              type="text"
              value={formData.user_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <label>Subject:</label>
            <input
              id="subject"
              autoComplete="off"
              name="user_subject"
              type="text"
              value={formData.user_subject}
              onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <label>Email:</label>
            <input
              id="email"
              autoComplete="off"
              name="user_email"
              type="email"
              value={formData.user_email}
              onChange={handleChange}
              />
          </div>
          <div className="form-item">
            <label htmlFor="message">Message:</label>
            <textarea
              id="msg"
              name="message"
              autoComplete="off"
              cols="15"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              />
          </div>

          <div className="button">
            <motion.input
              className="page-btn dark-btn"
              type="submit"
              value="Send Message"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </div>
        </form>
        </div>

        <div className="contact-images">
          
            <motion.div className="animation-container">
            <motion.div
              className="trail"
              variants={trailVariants}
              initial="initial"
              animate={contactControls}
              >
              <Trail />
            </motion.div>
          
            <motion.div
            className="outer-plane"
            variants={flyIn}
            initial="initial"
            //animate="animate"
            animate={contactControls}
          >
            <motion.div
              className="plane"
              variants={planeVariants}
              //initial="planeinitial"
              animate="planeanimate"
              //animate={contactControls}
            >
              <Plane />
            </motion.div>
          </motion.div>
          
          </motion.div>

          <div
            className="contact-bar"
            initial="initial"
            variants={slideUp}
            animate={contactControls}
            >
            <ContactIconBar
              size="40px"
              color="whitesmoke"
              bgcolor="var(--highlight-dark)"
              allIcons={allIcons}
              />
          </div> 
        </div>
    </div>
      
    </ContactSection>
  );
};

const ContactSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 2rem 1rem 1rem 1rem;
  padding: 1rem;
  align-items: center;
  row-gap: 1rem;
  justify-content: space-between;  
  
  .section-header {
    justify-self: flex-start;
  }

  .content {
    display: flex;
    gap: 1rem;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    flex-grow: 1;
    padding: 1rem;

    .contact-information{
      z-index: 10;
      flex: 1 1 400px;
    }  
  }
  
  form {
    display: flex;
    flex-direction: column;
    flex-basis: 40%;
    flex-grow: 1;
    justify-content: space-between;
    background: #1f2525;
    background: #2b2b37;
    padding: 2rem;
    border-radius: 10px;
    gap: 1rem;
    height: 100%;

    .form-item {
      display: flex;
      flex-direction: column;
      row-gap: 0.25rem;
    }
    .button {
      display: flex;
      justify-content: center;
    }
    label {
      color: var(--color-light-text);
    }

    input[type="text"],
    input[type="email"],
    textarea {
      font-family: "poppins", sans-serif;
      padding: 0.2rem;
      font-size: 1.1rem;
      resize: none;
      border-radius: 4px;
      border: none;
      outline-style: none;
      -moz-outline-style: none;
      &:active,
      &:focus {
        outline: none;
        -moz-outline: none;
        box-shadow: 0px 0px 5px 3px #689ed0;
      }
    }
  }

  .contact-images {
    position: relative;
    flex: 1 1 40%;
    display: flex;
    align-items: flex-end;
    //justify-content: flex-end;
    //min-width: 40vw;
    position: relative;
    
    .animation-container {
      position: absolute;
      width: 100%;  
      height: 100%;  
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;

      .trail{
        //position: absolute;
        /* top: 0rem;
        left: 0rem; */
        
        display: flex;
        justify-self: flex-start;
        align-self: center;
        flex-grow: 1;
        width: 100%;
        transform: rotate(-5deg) scale(1.2) translateX(0px) translateY(-40px);
      }
      
      .outer-plane {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        padding-right: 1rem;
        
        .plane {
          display: flex;
          justify-self: flex-end;
        }
      }
    }

  }
  .contact-bar {
    z-index: 10;
    bottom: 0;
    right: 0;
    width: 100%;
  }

  //#### RESPONSIVE SECTION ####
  //<800px: smaller devices
  @media screen and (max-width: 800px) {
    padding: 0;
    .contact-bar{
      position: static;
    }
    
    .trail, .outer-plane, .plane {
      opacity: 0;
      z-index: -1;
    }
  }

`;

export default Contact;
