import { useCallback, useEffect, useState } from "react";

export const Posts = () => {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  });
  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("データの取得に失敗しました");
      }
      const json = await res.json();
      setState({
        ...state,
        data: json,
        loading: false,
      });
      // setPosts(json);
    } catch (error) {
      setState({
        ...state,
        loading: false,
        error,
      });
      // setError(error);
    }
    // setLoading(false);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log("foo");

  if (state.loading) {
    return <div>ローディング中です。</div>;
  }

  if (state.error) {
    return <div>{error.message}</div>;
  }

  if (state.data.length === 0) {
    return <div>データは空です。</div>;
  }
  return (
    <ol className="list-decimal">
      {state.data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
