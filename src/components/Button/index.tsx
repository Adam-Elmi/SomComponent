import setCase from "../../utils/setCase";
import type { SmartButtonProps } from "./types";
import { default_styles } from "./styles";
import useButtonRules from "../../rules/useButtonRules";

const SmartButton: React.FC<SmartButtonProps> = ({
  icon,
  icon_position = "left",
  label,
  textCase,
  disable_opacity = "0.5",
  disabled_text,
  rules = {},
  onClick,
  ...props
}) => {
  const { handleClick, canClick, clickCount } = useButtonRules(rules);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!canClick()) return;

    handleClick();
    if (onClick) onClick(e);
  };
  return (
    <button
      onClick={handleButtonClick}
      disabled={!canClick()}
      {...props}
      style={{
        ...(default_styles || {}),
        opacity: !canClick() ? disable_opacity : 1,
        cursor: !canClick() ? "not-allowed" : "pointer",
        ...(props.style || {}),
      }}
    >
      {icon_position === "left" ? icon : null}
      {label ? setCase(label, textCase) : "Clicked " + clickCount}
      {icon_position === "right" ? icon : null}
    </button>
  );
};

export default SmartButton;
