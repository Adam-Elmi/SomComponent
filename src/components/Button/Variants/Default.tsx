import { useEffect, useRef, useState } from "react";
import setCase from "../../../utils/setCase";
import type { SmartButtonProps } from "../types";
import { default_styles } from "../styles";
import useButtonRules from "../../../rules/useButtonRules";
import handleButtonClick from "../../../utils/handleButtonClick";

/* Default Button */
const Default: React.FC<SmartButtonProps> = ({
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
  const { handleClick, canClick, clickCount, checkDisability } =
  useButtonRules(rules);
  const smartBtnRef = useRef(null);
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const [updateText, setUpdateText] = useState<string | undefined>(label);
  const [updateIcon, setUpdateIcon] = useState<
    React.ReactElement<HTMLImageElement | SVGElement> | undefined
  >(icon);

  useEffect(() => {
    const btn = smartBtnRef.current;

    if (btn) {
      setUpdateText(
        isDisable
          ? disabled_text || ""
          : !canClick()
            ? disabled_text || ""
            : label
              ? setCase(label, textCase)
              : "Clicked " + clickCount,
      );
      setUpdateIcon(
        isDisable ? disabled_icon : !canClick() ? disabled_icon : icon,
      );

      setIsDisable(checkDisability(btn));
    }
  }, [
    isDisable,
    canClick,
    checkDisability,
    disabled_text,
    updateText,
    clickCount,
    label,
    textCase,
    disabled_icon,
    icon,
  ]);
  return (
    <button
      ref={smartBtnRef}
      onClick={(e) => handleButtonClick(e, () => onClick?.(e), [() => !canClick(), () => handleClick()])}
      disabled={isDisable}
      {...props}
      style={{
        ...(default_styles || {}),
        opacity: isDisable
          ? disable_opacity
          : !canClick()
            ? disable_opacity
            : 1,
        cursor: isDisable
          ? "not-allowed"
          : !canClick()
            ? "not-allowed"
            : "pointer",
        ...(props.style || {}),
      }}
    >
      {icon_position === "left" ? updateIcon : null}
      {updateText}
      {icon_position === "right" ? updateIcon : null}
    </button>
  );
};
export default Default;