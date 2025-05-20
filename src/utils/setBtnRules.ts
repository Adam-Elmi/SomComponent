import isDisabled from "./isDisable";

interface Props {
  btn: any;
  allow_repeat: boolean;
  repeat: number | undefined;
  opacity_level: string;
  allow_timer: boolean;
  timer: number | undefined;
  disabled_text: string | undefined;
}

export default function setBtnRules({
  btn,
  allow_repeat,
  repeat,
  opacity_level,
  allow_timer,
  timer,
  disabled_text,
}: Props) {
  let count = 0;

  if (btn) {
    const element = btn as HTMLButtonElement;
    const content = element.innerHTML;
    if (allow_repeat) {
      const handle_repeat = () => {
        count++;
        if (repeat === count) {
          element.disabled = true;
          isDisabled(element, opacity_level);
          count = 0;
          if (disabled_text) {
            element.textContent = disabled_text;
          }

          if (allow_timer) {
            setTimeout(() => {
              element.disabled = false;
              isDisabled(element, opacity_level);
              if (disabled_text) {
                element.innerHTML = content;
              }
            }, timer);
          }
        }
      };
      element.addEventListener("click", handle_repeat);
    }
  }
}
