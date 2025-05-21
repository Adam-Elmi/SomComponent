import { useState, useEffect } from "react";

export default function useButtonRules(rules: {
  maxClicks?: number;
  wait?: number;
}) {
  const [clickCount, setClickCount] = useState<number>(0);
  const [isCooldown, setIsCooldown] = useState<boolean>(false);

  function canClick() {
    if (rules.maxClicks && clickCount >= rules.maxClicks) return false;
    if (isCooldown) return false;
    return true;
  }

  function handleClick() {
    if (!canClick()) return;
    setClickCount((prev: number) => prev + 1);
  }
  useEffect(() => {
    if (rules.maxClicks && clickCount >= rules.maxClicks && rules.wait) {
      setIsCooldown(true);
      const timer = setTimeout(() => {
        setIsCooldown(false);
        setClickCount(0);
      }, rules.wait * 1000);

      return () => clearTimeout(timer);
    }
  }, [clickCount, rules.maxClicks, rules.wait]);
  return { clickCount, isCooldown, canClick, handleClick };
}
