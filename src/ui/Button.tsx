import { useEffect, useRef } from "react";
import setCase from "../utils/setCase";
import isDisabled from "../utils/isDisable";
import setBtnRules from "../utils/setBtnRules";

type ButtonProps = {
  icon?: React.ReactElement;
  icon_position?: "left" | "right";
  children?: React.ReactNode;
  textCase?: string | undefined;
  disable_opacity?: string;
  allow_repeat?: boolean;
  repeat?: number;
  allow_timer?: boolean;
  timer?: number;
  disabled_text?: string;
  ptop?: React.CSSProperties["paddingTop"];
  pleft?: React.CSSProperties["paddingLeft"];
  pright?: React.CSSProperties["paddingRight"];
  pbottom?: React.CSSProperties["paddingBottom"];
  background?: React.CSSProperties["background"];
  textColor?: React.CSSProperties["color"];
  border?: React.CSSProperties["border"];
  radius?: React.CSSProperties["borderRadius"];
  fontSize?: React.CSSProperties["fontSize"];
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  icon,
  icon_position = "left",
  children,
  textCase,
  disable_opacity = "0.5",
  allow_repeat = false,
  repeat,
  allow_timer = false,
  timer = 0,
  disabled_text,
  ptop,
  pleft,
  pright,
  pbottom,
  background,
  textColor,
  border,
  radius,
  fontSize,
  ...props
}: ButtonProps) {
  const sombtnRef = useRef(null);
  useEffect(() => {
    isDisabled(sombtnRef.current, disable_opacity);
    setBtnRules({
      btn: sombtnRef.current,
      opacity_level: disable_opacity,
      allow_repeat: allow_repeat,
      repeat: repeat,
      allow_timer: allow_timer,
      timer: timer,
      disabled_text: disabled_text,
    });
  }, []);
  return (
    <button
      ref={sombtnRef}
      name="sombtn"
      {...props}
      style={{
        paddingTop: ptop,
        paddingLeft: pleft,
        paddingRight: pright,
        paddingBottom: pbottom,
        background: background,
        color: textColor,
        border: border,
        borderRadius: radius,
        fontSize: fontSize,
        ...(props.style || {}),
      }}
    >
      {icon_position === "left" ? icon : null}
      {children
        ? typeof children === "string"
          ? setCase(children, textCase)
          : children
        : "Click me"}
      {icon_position === "right" ? icon : null}
    </button>
  );
}
