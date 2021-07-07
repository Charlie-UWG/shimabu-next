export const Links = () => {
  const ITEMS = [
    {
      href: "https://nextjs.org/docs",
      title: "Documentation",
      description: "Find in-depth information about Next.js features and API.",
    },
    {
      href: "https://nextjs.org/learn",
      title: "Learn",
      description: "Learn about Next.js in an interactive course with quizzes!",
    },
    {
      href: "https://github.com/vercel/next.js/tree/master/examples",
      title: "Examples",
      description: "Discover and deploy boilerplate example Next.js projects.",
    },
    {
      href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      title: "Deploy",
      description:
        "Instantly deploy your Next.js site to a public URL with Vercel.",
    },
  ];

  return (
    <ul className="group flex items-center justify-center flex-wrap max-w-3xl mt-12">
      {ITEMS.map((item) => {
        return (
          <li
            key={item.href}
            className="m-4 p-6 text-left no-underline border border-solid rounded-lg w-5/12 transition-colors duration-150 text-yellow-50 hover:text-blue-300 border-white hover:border-blue-300"
          >
            <a href={item.href}>
              <h2 className="text-2xl pb-4">{item.title}</h2>
              <p className="text-xl leading-6">{item.description}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
