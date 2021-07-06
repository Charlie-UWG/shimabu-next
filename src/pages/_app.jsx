import { useBgColor } from "src/hooks/useBgColor";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import "src/styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();

  return <Component {...pageProps} {...counter} {...inputArray} />;
}

export default MyApp;
