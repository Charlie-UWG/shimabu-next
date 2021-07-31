import { Post } from "components/Post";
import { Header } from "src/components/Header";

const PostId = () => {
  return (
    <div className="min-h-full px-2 flex flex-col justify-center items-center">
      <Header />
      <Post />
    </div>
  );
};

export default PostId;
