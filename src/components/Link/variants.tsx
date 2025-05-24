import type { SmartLinkProps } from "./types";
import { DefaultLink } from "./Variants/Default";
import DescriptiveLink from "./Variants/Descriptive";

const Variants: React.FC<SmartLinkProps> = ({
  variant,
  path,
  text,
  icon,
  icon_position,
  is_outside,
  show_arrow = false,
  icon_style,
  descriptive_style,
  descriptive_title,
  link_title,
  ...props
}) => {
  const variantLinks = {
    default: (
      <DefaultLink
        {...{
          path,
          text,
          icon,
          icon_position,
          is_outside,
          show_arrow,
          icon_style,
          ...props,
        }}
      />
    ),
    descriptive: (
      <DescriptiveLink {...{
        path,
        text,
        icon,
        is_outside,
        show_arrow,
        icon_style,
        link_title,
        descriptive_style,
        descriptive_title,
        ...props
      }} />
    )
  };
  switch (variant) {
    case "descriptive":
      return variantLinks.descriptive;
    default:
      return variantLinks.default;
  }
};

export default Variants;
