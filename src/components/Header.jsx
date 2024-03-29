import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-center w-full gap-4 m-5 p-6 border-b border-white">
      <Link href="/">
        <a className="text-xl bg-gray-400 px-4 py-3 rounded-lg hover:text-blue-300 hover:bg-gray-300 transition-colors duration-300">
          Home
        </a>
      </Link>
      <Link href="/posts">
        <a className="text-xl bg-gray-400 px-4 py-3 rounded-lg hover:text-blue-300 hover:bg-gray-300 transition-colors duration-300">
          Posts
        </a>
      </Link>
      <Link href="/users">
        <a className="text-xl bg-gray-400 px-4 py-3 rounded-lg hover:text-blue-300 hover:bg-gray-300 transition-colors duration-300">
          Users
        </a>
      </Link>
      <Link href="/comments">
        <a className="text-xl bg-gray-400 px-4 py-3 rounded-lg hover:text-blue-300 hover:bg-gray-300 transition-colors duration-300">
          Comments
        </a>
      </Link>
    </div>
  );
};
