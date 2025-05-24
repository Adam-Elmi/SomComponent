import type { SmartButtonProps } from "./types";
import Variants from "./variants";
const SmartButton: React.FC<SmartButtonProps> = ({
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

  return (
    <Variants {...{
      icon,
      icon_position,
      label,
      textCase,
      disable_opacity,
      disabled_text,
      disabled_icon,
      rules,
      onClick,
      ...props,
    }}/>
  );
};

export default SmartButton;
