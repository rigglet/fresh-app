//font-family: 'Inter', sans-serif;
//font-family: 'Lobster', cursive;
//font-family: 'Montserrat', sans-serif;
//gradient colors - #34CE93
//#59ADEB

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  //cursor: default;
}


html{
  --color-dark-background: #111111; 
  --color-light-background: #f5f5f5;
  --color-dark-text: #111111;
  --color-light-text: #f5f5f5;
  
  --color-nav-background: #313131;
  --color-nav-hover: #689ed0;
  
  --section-light-border: #689ed0;
  --container-light-border: #689ed0;
  
  --header-color-light: #f5f5f5;
  --header-color-dark: #313131;

  --highlight-dark: #1f2525;
  
  --gradient-ltr-45: linear-gradient(
    45deg,
    #1c3b57 0%,
    #65617d 33%,
    #689ed0 66%,
    #c6c6c6 100%
    );
    //#f5f5f5 100%
    
  --gradient-ltr: linear-gradient(
    90deg,
    #1c3b57 0%,
    #65617d 25%,
    #689ed0 50%,
    #c6c6c6 75%,
    #f5f5f5 100%
    );
    
  --gradient-rtl: linear-gradient(
    90deg,
    #f5f5f5 0%,
    #c6c6c6 25%,
    #689ed0 50%,
    #65617d 75%,
    #1c3b57 100%
    );
    
  }


  .app{
  //scroll-padding: 200px;
  //scroll-snap-type: y proximity;
  //scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
}


body{
  //7vh offset for height of NAV
  scroll-padding: 7vh;
  background: #111111;
  background: white;
  font-family: 'Poppins', sans-serif;
}
/* .project-card-link-btn-icon {
  &:hover {
    color: #65617d;
  }
} */

//Sticky NAV on scroll up
/* .showNav {
    transform: translateY(-9vh); 
  }

.hideNav {
  transform: translateY(0vh);
} */

.section-header{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
  
  .section-title-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 1;
    
    //h1 heading on some sections
    .section-heading {
      font-weight: 300;
      font-size: 1.5rem;
      cursor: default;
      padding: 0 1rem;
    }
    //h2 sub-heading on some sections
    .section-subheading {
      font-weight: 400;
      font-size: 1.2rem;
      cursor: default;
      padding: 0 1rem;
    }
  }
}

//#### RESPONSIVE SECTION ####
  //320px — 480px: Mobile devices
  @media screen and (max-width: 480px) and (orientation: portrait) {
    .section-header{
    .section-title-content{
    
    //h1 heading on some sections
    .section-heading {
      font-size: 1.6rem;
    }
    //h2 sub-heading on some sections
    .section-subheading {
      font-size: 1.4rem;
    }
  }
}
  }

.heading-light{
  color: var(--header-color-light);
}
.heading-dark{
  color: var(--header-color-dark);
}



//scrollbar styling
/* ::-webkit-scrollbar — the entire scrollbar.
::-webkit-scrollbar-button — the buttons on the scrollbar (arrows pointing upwards and downwards).
::-webkit-scrollbar-thumb — the draggable scrolling handle.
::-webkit-scrollbar-track — the track (progress bar) of the scrollbar.
::-webkit-scrollbar-track-piece — the part of the track (progress bar) not covered by the handle.
::-webkit-scrollbar-corner — the bottom corner of the scrollbar, where both horizontal and vertical scrollbars meet.
::-webkit-resizer — the draggable resizing handle that appears at the bottom corner of some elements. */
/* The emerging W3C standard
   that is currently Firefox-only */
* {
  scrollbar-width: none;
  scrollbar-color: rgba(155, 155, 155, 0.7) transparent;
}

/* Works on Chrome/Edge/Safari */
*::-webkit-scrollbar {
  width: 7px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background-color: #65617d;
  border-radius: 20px;
  border: 1px solid white;
}

//button, input[type='submit']{
.page-btn{
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    font-size: 1.0rem;
    cursor: pointer;
    padding: 1rem 3rem;
    border: 2px solid #689ed0;
    color: #689ed0;
    background: transparent;
    border-radius: 20px;
    text-transform: uppercase;

    &:hover{
      background: #689ed0;
      background: linear-gradient(90deg,  #65617d 0%, #689ed0 50%, #c6c6c6 100%);
      color: #1c3b57;
      border: 2px solid #689ed0;
      background-size: 300%;
      background-position: center;
      animation: gradient 1s linear infinite alternate;
      //box-shadow: 0px 0px 20px rgba(101, 97, 125, 1); 
    }
    
    @keyframes gradient {
      0% {
        background-position: 100%;
      }
      100% {
        background-position: 0%;
      }
    }
    &:active{
      transform: translateY(3px);
      }
    &:focus {
      outline-style: none;
      -moz-outline-style: none;
    }
}

.light-btn {
    border: 2px solid #1c3b57;
    color: #1c3b57;
}
.dark-btn {
    border: 2px solid #689ed0;
    color: #689ed0;
}

.close {
  cursor: pointer;
  width: 25px;
  height: 25px;
  color: white;
  &:active {
    transform: translateY(1px);
    color: #689ed0;
  }
  &:hover {
    color: #689ed0;
  }
}

.filter {
  color: white;
  padding: 0rem;
  height: 30px;
  width: 30px;
}
select {
  outline-style: none;
  -moz-outline-style: none;
  padding: 0.3rem;
  margin-left: 2rem;
  font-size: 1rem;
  background-color: #666666;
  color: white;
}

    
//React-toastify - Toast close button
.toastClose{
  color: #689ed0;
  cursor: pointer;
  height: 25px;
  width: 25px;
  &:hover{
      color: transparent;
      color: grey;
  }
  &:active,
  &:focus {
    outline-style: none;
    -moz-outline-style: none;
    transform: translateY(1px);
  }
}
    
    //SLIDER
    /* The switch - the box around the slider */

.switch {
  position: relative;
  display: inline-block;
  width: 2.5rem;
  height: 1.25rem;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1rem;
  width: 1rem;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #689ed0;
}

input:focus + .slider {
  box-shadow: 0 0 1px #689ed0;
}

input:checked + .slider:before {
  -webkit-transform: translateX(1.25rem);
  -ms-transform: translateX(1.25rem);
  transform: translateX(1.25rem);
}

/* Rounded sliders */
.slider.round {
  border-radius: 17px;
}

.slider.round:before {
  border-radius: 50%;
}

.title-header {
  display: flex;
  column-gap: 1rem;
  margin-bottom: 1rem;
  h1 {
    font-size: 16pt;
    font-weight: 600;
    //margin-bottom: 0.5rem;
  }
  .title-icon {
    width: 30px;
    height: 30px;
  }
  /* h5 {
    border-radius: 4px;
    padding: 0.25rem;
    background-color: rgba(131, 169, 204, 0.5);
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 10pt;
    //margin-bottom: 1.5rem;
  } */
}


//Vertical timeline custom colors
/* CUSTOM LINE COLOR */
/* The line */
/* #f5f5f5
      #c6c6c6
      #689ed0
      #65617d
      #1c3b57 */
.vertical-timeline.vertical-timeline-custom-line::before {
  background: #65617d;
}

/* Icon container's border */
.vertical-timeline.vertical-timeline-custom-line .vertical-timeline-element--work .vertical-timeline-element-icon {
  box-shadow: 0 0 0 4px #65617d, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
}

.vertical-timeline.vertical-timeline-custom-line .vertical-timeline-element--education .vertical-timeline-element-icon {
  box-shadow: 0 0 0 4px #c2185b, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
}
`;

export default GlobalStyle;

//#### RESPONSIVE SECTION ####
//320px — 480px: Mobile devices
//@media screen and (max-width: 480px) and (orientation: portrait) {}
//320px — 480px: Mobile devices
//@media screen and (max-width: 850px) and (orientation: landscape) {}
//481px — 768px: iPads, Tablets
//@media screen and (min-width: 481px) and (max-width: 769px) and (orientation: portrait) {}
//481px — 768px: iPads, Tablets
//@media screen and (min-width: 481px) and (max-width: 769px) and (orientation: landscape) {}
//769px — 1024px: Small screens, laptops
//@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {}
//769px — 1024px: Small screens, laptops
//@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {}
//1025px — 1200px: Desktops, large screens
//@media screen and (min-width: 1024px) and (max-width: 1200px) and (orientation: portrait) {}
//1025px — 1200px: Desktops, large screens
//@media screen and (min-width: 1024px) and (max-width: 1200px) and (orientation: landscape) {}
//1201px and more —  Extra large screens, TV
//@media screen and (min-width: 1201px) and (max-width: 1500px) and (orientation: portrait) {}
//1201px and more —  Extra large screens, TV
//@media screen and (min-width: 1201px) and (max-width: 1500px) and (orientation: landscape) {}
//1501px and more —  Extra large screens, TV
//@media screen and (min-width: 1501px) and (orientation: portrait) {}
//1501px and more —  Extra large screens, TV
//@media screen and (min-width: 1921px) and (orientation: landscape) {}
