import Head from "next/head";
import { Header } from "src/components/Header";
import { Comments } from "components/Comments/index.jsx";

const CommentsIndex = () => {
  return (
    <div className="min-h-full px-2 flex flex-col justify-center items-center">
      <Head>
        <title>Comments</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Comments />
    </div>
  );
};

export default CommentsIndex;