import { Post } from "components/Post";
import { User } from "components/User";
import { Header } from "src/components/Header";

const UserId = () => {
  return (
    <div className="min-h-full px-2 flex flex-col justify-center items-center">
      <Header />
      <User />
    </div>
  );
};

export default UserId;
