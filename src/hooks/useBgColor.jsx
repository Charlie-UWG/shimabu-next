import { useEffect } from "react";

export const useBgColor = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightBlue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
