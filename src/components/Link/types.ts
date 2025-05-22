export type SmartLinkProps = {
    variant?: string;
    path?: string;
    text?: string;
    icon?: React.ReactElement<SVGElement> | React.ReactElement<HTMLImageElement>
    icon_position?: "left" | "right"
    is_outside?: boolean;
    show_arrow?: boolean;
    icon_style?: React.CSSProperties;
    link_title?: string;
    descriptive_style?: React.CSSProperties;
    descriptive_title?: React.CSSProperties;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>