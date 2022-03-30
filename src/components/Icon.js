import PropTypes from "prop-types";
//icons
import { IconContext } from "react-icons";
import * as allIcons from "@react-icons/all-files";
import * as aiIcons from "react-icons/ai";
import * as bsIcons from "react-icons/bs";
import * as biIcons from "react-icons/bi";
import * as diIcons from "react-icons/di";
import * as fcIcons from "react-icons/fc";
import * as giIcons from "react-icons/gi";
import * as goIcons from "react-icons/go";
import * as grIcons from "react-icons/gr";
import * as hiIcons from "react-icons/hi";
import * as imIcons from "react-icons/im";
import * as ioIcons from "react-icons/io";
import * as io5Icons from "react-icons/io5";
import * as riIcons from "react-icons/ri";
import * as siIcons from "react-icons/si";
import * as tiIcons from "react-icons/ti";
import * as vscIcons from "react-icons/vsc";
import * as wiIcons from "react-icons/wi";

import * as fiIcons from "react-icons/fi";
import * as faIcons from "react-icons/fa";

const Icon = ({ icon, color, size, title, className }) => {
  //icons
  let allIcons = {
    ...aiIcons,
    ...bsIcons,
    ...biIcons,
    ...diIcons,
    ...faIcons,
    ...fcIcons,
    ...fiIcons,
    ...giIcons,
    ...goIcons,
    ...grIcons,
    ...hiIcons,
    ...imIcons,
    ...ioIcons,
    ...io5Icons,
    ...riIcons,
    ...siIcons,
    ...tiIcons,
    ...vscIcons,
    ...wiIcons,
  };
  //console.log(allIcons);
  let DynamicIcon = allIcons[icon];

  return (
    <IconContext.Provider value={{ color, size, title, className }}>
      {DynamicIcon !== undefined && <DynamicIcon />}
      {/* <FaBeer /> */}
    </IconContext.Provider>
  );
};

Icon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
};

Icon.defaultProps = {
  icon: "FaFlushed",
  color: "blue",
  size: "30px",
  title: "icon",
};

export default Icon;
