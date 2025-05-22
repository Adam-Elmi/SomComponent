import type { SmartLinkProps } from "./types";
import {
  default_styles,
  icon_default_styles,
  descriptive_styles,
} from "./styles";
import ArrowIcon from "../../icons/ArrowIcon";

const icon_value = ({
  is_outside,
  show_arrow,
  icon_style,
  icon,
}: SmartLinkProps) => (
  <span
    style={{
      ...(is_outside && show_arrow
        ? { ...icon_default_styles, transform: "rotate(-45deg)", ...icon_style }
        : { ...icon_default_styles, ...icon_style }),
    }}
  >
    {show_arrow ? <ArrowIcon /> : icon}
  </span>
);

export const DefaultLink: React.FC<SmartLinkProps> = ({
  path,
  text,
  icon,
  icon_position,
  is_outside,
  show_arrow = false,
  icon_style,
  variant,
  ...props
}) => {
  const getIcon = icon_value({ is_outside, show_arrow, icon_style, icon });
  return (
    <a
      href={path}
      target={is_outside ? "_blank" : "_parent"}
      style={{ ...(default_styles || {}), ...(props.style || {}) }}
      {...props}
    >
      {icon_position === "left" ? getIcon : null}
      {text}
      {icon_position === "right" ? getIcon : null}
    </a>
  );
};

export const DescriptiveLink: React.FC<SmartLinkProps> = ({
  path,
  text,
  icon,
  is_outside,
  show_arrow = false,
  icon_style,
  link_title,
  variant,
  descriptive_style,
  descriptive_title,
  ...props
}) => {
  const getIcon = icon_value({ is_outside, show_arrow, icon_style, icon });
  return (
    <a
      href={path}
      target={is_outside ? "_blank" : "_parent"}
      style={{
        ...(descriptive_styles || {}),
        ...(props.style || {}),
        ...(descriptive_style || {}),
      }}
      {...props}
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
