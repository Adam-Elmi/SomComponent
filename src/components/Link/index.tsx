import type { SmartLinkProps } from "./types";
import { DefaultLink, DescriptiveLink } from "./variants";

const SmartLink: React.FC<SmartLinkProps> = ({
  variant,
  path = "/",
  text = "Link",
  icon,
  icon_position = "left",
  is_outside,
  show_arrow = false,
  ...props
}) => {
  switch (variant) {
    case "descriptive":
      return (
        <DescriptiveLink
          {...{ path, text, icon, is_outside, show_arrow, ...props }}
        />
      );
    default:
      return (
        <DefaultLink
          {...{
            path,
            text,
            icon,
            icon_position,
            is_outside,
            show_arrow,
            ...props,
          }}
        />
      );
  }
};

export default SmartLink;
