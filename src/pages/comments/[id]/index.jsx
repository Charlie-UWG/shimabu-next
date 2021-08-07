import { Comment } from "components/Comment";
import { Header } from "src/components/Header";

const CommentsId = () => {
  return (
    <div className="min-h-full px-2 flex flex-col justify-center items-center">
      <Header />
      <Comment />
    </div>
  );
};

export default CommentsId;
