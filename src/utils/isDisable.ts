export default function isDisabled(el: any, opacity_level: string) {
  const btn = el;
  const element = btn as HTMLButtonElement,
    isDisabled = element.disabled;

  if (isDisabled) {
    element.style.opacity = opacity_level;
    element.style.cursor = "not-allowed";
  } else {
      element.style.opacity = "1";
      element.style.cursor = "pointer";
  }

  return isDisabled;
}
