import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChangeText = useCallback((e) => {
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      return [...prevArray, text];
    });
  }, [text]);
  return { text, array, handleChangeText, handleAdd };
};
