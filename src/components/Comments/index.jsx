import Link from "next/link";
import { useComments } from "src/hooks/useFetchArray";

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments();
  // console.log({ data, error });

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データは空です。</div>;
  }
  return (
    <ol className="list-decimal">
      {data.map((commment) => {
        return (
          <li key={commment.id}>
            <Link href={`comments/${commment.id}`}>
              <a>{commment.body}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
