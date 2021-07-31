import Head from "next/head";
import { usePost } from "src/hooks/usePost";

export const Post = () => {
  const { post, user, error, isLoading } = usePost();
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
        <title>{`No.${post?.id}`}</title>
      </Head>
      <h1 className="text-4xl m-4">{post?.title}</h1>
      <p>{post?.body}</p>
      {user?.name ? <div>presented by {user.name}</div> : null}
    </div>
  );
};
