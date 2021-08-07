import Head from "next/head";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { data, error, isLoading } = useUser();
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
        <title>{`NameId.${data?.id}`}</title>
      </Head>
      <h1 className="text-4xl m-4">{data?.name}</h1>
      <p>{data?.username}</p>
      <p>{data?.email}</p>
      <p>{data?.city}</p>
    </div>
  );
};
