import type { SmartLinkProps } from "../types";
import { descriptive_styles } from "../styles";
import icon_value from "../../../utils/getIconValue";

const DescriptiveLink: React.FC<SmartLinkProps> = ({
  path,
  text,
  icon,
  is_outside,
  show_arrow = false,
  icon_style,
  link_title,
  descriptive_style,
  descriptive_title,
  ...props
}) => {
  const getIcon = icon_value({ is_outside, show_arrow, icon_style, icon });
  return (
    <a
      {...props}
      href={path}
      target={is_outside ? "_blank" : "_parent"}
      style={{
        ...(descriptive_styles || {}),
        ...(descriptive_style || {}),
        ...(props.style || {}),
      }}
    >
      <span
        style={{
          borderRadius: "100px",
          padding: "6px 12px",
          backgroundColor: "#00dc82",
          color: "#000",
          fontFamily: "SharedTech",
          ...(descriptive_title || {}),
          ...(props.style || {}),
        }}
      >
        {link_title}
      </span>
      {text}
      {getIcon}
    </a>
  );
};

export default DescriptiveLink;
