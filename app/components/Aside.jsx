import Image from "next/image";
import Link from "next/link";
const Aside = ({ dictionary }) => {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <Image src="/trending.svg" width="24" height="24" alt="" />
            <span>{dictionary.trending}</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src="/newRelease.svg" width="24" height="24" alt="" />
            <span>{dictionary.new_realese}</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src="/commingSoon.svg" width="24" height="24" alt="" />
            <span>{dictionary.coming_soon}</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src="/favourite.svg" width="24" height="24" alt="" />
            <span>{dictionary.favourites}</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src="/watchLater.svg" width="24" height="24" alt="" />
            <span>{dictionary.watch_later}</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
