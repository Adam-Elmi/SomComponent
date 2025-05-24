import type { SmartLinkProps } from "../types";
import { default_styles } from "../styles";
import icon_value from "../../../utils/getIconValue";

export const DefaultLink: React.FC<SmartLinkProps> = ({
  path,
  text,
  icon,
  icon_position,
  is_outside,
  show_arrow = false,
  icon_style,
  ...props
}) => {
  const getIcon = icon_value({ is_outside, show_arrow, icon_style, icon });
  return (
    <a
      {...props}
      href={path}
      target={is_outside ? "_blank" : "_parent"}
      style={{ ...(default_styles || {}), ...(props.style || {}) }}
    >
      {icon_position === "left" ? getIcon : null}
      {text}
      {icon_position === "right" ? getIcon : null}
    </a>
  );
};
