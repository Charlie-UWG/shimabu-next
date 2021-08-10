import Head from "next/head";
import { Header } from "src/components/Header";
import { Posts } from "src/components/Posts";

const PostsIndex = () => {
  return (
    <div className="min-h-full px-2 flex flex-col justify-center items-center">
      <Head>
        <title>Posts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Posts />
    </div>
  );
};

export default PostsIndex;
