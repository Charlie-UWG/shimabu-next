import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";

export const Main = (props) => {
  return (
    <div className="py-16 px-0 flex flex-1 flex-col justify-center items-center">
      <Headline page={props.page} />
      <Links />
    </div>
  );
};
