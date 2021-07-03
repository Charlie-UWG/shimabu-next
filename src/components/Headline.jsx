export const Headline = (props) => {
  return (
    <div>
      <h1 className="text-8xl font-bold text-center p-4 capitalize">
        page <a href="https://nextjs.org">{props.page}</a>
      </h1>
      <p className="text-center leading-5 text-2xl">
        Get started by editing{" "}
        <code className="bg-gray-50 rounded-md p-3 text-lg">
          pages/{props.page}.js
        </code>
      </p>
    </div>
  );
};
