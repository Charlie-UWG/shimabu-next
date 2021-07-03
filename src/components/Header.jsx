import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-center gap-4 m-5 p-6">
      <Link href="/">
        <a className="text-xl">Index</a>
      </Link>
      <Link href="/about">
        <a className="text-xl">About</a>
      </Link>
    </div>
  );
};
