type ButtonProps = {
    children?: React.ReactNode;
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
    children,
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
    return (
        <button
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
            {children ? children : "Click me"}
        </button>
    );
}
