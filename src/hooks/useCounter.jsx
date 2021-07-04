import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    console.log(`アップ ${count}`);
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  const handleClickDec = useCallback(() => {
    console.log(`ダウン ${count}`);
    setCount((prevCount) => prevCount - 1);
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);
  return { count, isShow, handleClick, handleClickDec, handleDisplay };
};
