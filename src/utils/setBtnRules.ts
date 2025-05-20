import isDisabled from "./isDisable";

interface Props {
  btn: any;
  allow_repeat: boolean;
  repeat: number | undefined;
  opacity_level: string;
  allow_timer: boolean;
  timer: number | undefined;
}

export default function setBtnRules({
  btn,
  allow_repeat,
  repeat,
  opacity_level,
  allow_timer,
  timer,
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
          element.textContent = "Button disabled";
            
            if (allow_timer) {
                setTimeout(() => {
                    element.disabled = false;
                    isDisabled(element, opacity_level);
                     element.innerHTML = content;
            }, timer);
        }
    }
    console.log(count);
};
element.addEventListener("click", handle_repeat);
    }
  }
}
