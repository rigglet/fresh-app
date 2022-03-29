import PropTypes from "prop-types";
//icons
import { IconContext } from "react-icons";
import * as allIcons from "@react-icons/all-files";

const Icon = ({ icon, color, size, title, className }) => {
  //icons
  let DynamicIcon = allIcons[icon];

  return (
    <IconContext.Provider value={{ color, size, title, className }}>
      {DynamicIcon !== undefined && <DynamicIcon />}
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
