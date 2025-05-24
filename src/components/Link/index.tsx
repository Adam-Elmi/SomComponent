import type { SmartLinkProps } from "./types";
import Variants from "./variants";
const SmartLink: React.FC<SmartLinkProps> = ({
  variant,
  path = "/",
  text = "Link",
  icon,
  icon_position = "left",
  is_outside,
  show_arrow = false,
  icon_style,
  link_title,
  descriptive_style,
  descriptive_title,
  ...props
}) => {
  return <Variants {...{
    variant,
    path,
    text,
    icon,
    icon_position,
    is_outside,
    show_arrow,
    icon_style,
    link_title,
    descriptive_style,
    descriptive_title,
    ...props
  }} />
};

export default SmartLink;
