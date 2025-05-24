import type { SmartLinkProps } from "../components/Link/types";
import ArrowIcon from "../icons/ArrowIcon";
import { icon_default_styles } from "../components/Link/styles";
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

export default icon_value;
