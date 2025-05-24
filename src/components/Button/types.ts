export type SmartButtonProps  = {
  icon?: React.ReactElement<HTMLImageElement | SVGElement>;
  icon_position?: "left" | "right";
  label?: string;
  textCase?: string | undefined;
  disable_opacity?: string;
  disabled_text?: string;
  disabled_icon?: React.ReactElement<HTMLImageElement | SVGElement>
  rules?: {
    maxClicks?: number;
    wait?: number;
  };
  onClick: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>;