//icons
import Icon from "./Icon";

const NavbarIcon = ({
  icon,
  color,
  size,
  title,
  className,
  func,
  showDropMenu,
  allIcons,
}) => {
  return (
    <div onClick={() => func(!showDropMenu)}>
      <Icon
        icon={icon}
        color={color}
        size={size}
        title={title}
        className={className}
        allIcons={allIcons}
      />
    </div>
  );
};

export default NavbarIcon;
