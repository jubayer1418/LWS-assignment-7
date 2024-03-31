"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MovieNotFound = () => {
  const pathName = usePathname().split("/");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        This movie with {pathName[3]} id was not found!
      </p>

      <Link href="/" className="text-blue-500 hover:underline">
        Go back to Homepage
      </Link>
    </div>
  );
};

export default MovieNotFound;
