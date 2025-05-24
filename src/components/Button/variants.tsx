import type { SmartButtonProps } from "./types";
import Default from "./Variants/Default";
import MultiLinks from "./Variants/MultiLinks";
const Variants: React.FC<SmartButtonProps> = ({
  variant,
  icon,
  icon_position = "left",
  label,
  textCase,
  disable_opacity = "0.5",
  disabled_text,
  disabled_icon,
  rules = {},
  onClick,
  ...props
}) => {
  const variantButtons = {
    multi: (
      <MultiLinks {...{...props, label, icon, icon_position, textCase, onClick }} />
    ),
    default: (
      <Default
        {...{
          ...props,
          icon,
          icon_position,
          label,
          textCase,
          disable_opacity,
          disabled_text,
          disabled_icon,
          rules,
          onClick,
        }}
      />
    ),
  };
  switch (variant) {
    case "multi":
      return variantButtons.multi;
    default:
      return variantButtons.default;
  }
};

export default Variants;
