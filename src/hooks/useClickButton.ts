import { useCallback, useState } from "react";

export default function useClickButton(callback?: () => void) {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = useCallback(() => {
    setButtonClicked(true);
    callback && callback();
    setTimeout(() => {
      setButtonClicked(false);
    }, 300);
  }, [callback]);

  return [buttonClicked, handleClick] as const;
}
