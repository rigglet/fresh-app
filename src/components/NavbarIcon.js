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
}) => {
  return (
    <div onClick={() => func(!showDropMenu)}>
      <Icon
        icon={icon}
        color={color}
        size={size}
        title={title}
        className={className}
      />
    </div>
  );
};

export default NavbarIcon;
