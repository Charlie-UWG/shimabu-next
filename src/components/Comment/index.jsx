import Head from "next/head";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { data, error, isLoading } = useComment();
  // console.log({ data, error });

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="w-5/6 space-y-4">
      <Head>
        <title>{`Comment.${data?.id}`}</title>
      </Head>
      <h1 className="text-4xl m-4">{data?.body}</h1>
      <p>{data?.name}</p>
      <p>{data?.email}</p>
    </div>
  );
};
