import type { SmartButtonProps } from "../types";
import setCase from "../../../utils/setCase";
import handleButtonClick from "../../../utils/handleButtonClick";
import TaillessArrow from "../../../icons/TaillessArrow";
import { useState } from "react";
const MultiLinks: React.FC<SmartButtonProps> = ({
  label,
  icon,
  icon_position,
  textCase,
  onClick,
  links = [
    { title: "SomCheat", url: "https://example.com" },
    { title: "SomUI", url:  "https://example.com" },
    { title: "SomGlossary", url:  "https://example.com" },
  ],
  ...props
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div
      style={{
        position: "relative",
        minWidth: "180px",
        width: "fit-content",
        border: "1.5px solid #eee",
        borderRadius: "5px",
        backgroundColor: "#1a73e8",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          {...props}
          onClick={(e) =>
            handleButtonClick(e, () => onClick?.(e), [
              () => setIsVisible((prev) => !prev),
            ])
          }
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "#fff",
            fontFamily: "Fira",
            fontSize: "1rem",
            cursor: "pointer",
            padding: "10px",
            flex: 1,
            ...props.style,
          }}
        >
          {icon_position === "left" ? icon : null}
          {label ? setCase(label, textCase) : "Hello World"}
          {icon_position === "right" ? icon : null}
        </button>
        <span
          onClick={() => setIsVisible((prev) => !prev)}
          style={{
            color: "#fff",
            borderLeft: "1px solid rgba(0, 0, 0, 0.3)",
            padding: "10px",
            backgroundColor: isVisible ? "#174ea6" : "",
            transform: isVisible ? "rotate(180deg)" : "",
          }}
        >
          <TaillessArrow />
        </span>
      </div>
      {isVisible && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            minHeight: "50px",
            backgroundColor: "#fff",
            overflowWrap: "break-word",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
            borderRadius: "4px",
            display: "flex",
            gap: "5px",
            flexDirection: "column",
          }}
        >
          {links
            ? links.map((link, index: number) => (
                <a
                  key={index}
                  href={link.url}
                  style={{
                    textDecoration: "none",
                    padding: "10px",
                    color: "#1a73e8",
                    fontFamily: "SharedTech",
                  }}
                >
                  {link.title}
                </a>
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default MultiLinks;
