export type SmartButtonProps  = {
  icon?: React.ReactElement;
  icon_position?: "left" | "right";
  label?: string;
  textCase?: string | undefined;
  disable_opacity?: string;
  disabled_text?: string;
  rules?: {
    maxClicks?: number;
    wait?: number;
  };
  onClick: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>;