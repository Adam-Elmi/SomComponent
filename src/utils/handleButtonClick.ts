type Callback<Args extends unknown[] = []> = (...args: Args) => void;

const handleButtonClick = <Args extends unknown[]>(
  e: React.MouseEvent<HTMLButtonElement>,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  callbacks?: Callback<Args>[],
  callbackArgs?: Args
): void => {
  const safeArgs = callbackArgs ?? ([] as unknown as Args);
  callbacks?.forEach(callback => callback(...safeArgs));
  onClick?.(e);
};

export default handleButtonClick;
