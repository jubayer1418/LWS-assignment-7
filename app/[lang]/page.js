import Image from "next/image";
import Link from "next/link";
import Aside from "../components/Aside";
import { getDictionary } from "./dictionaries";
const Home = async ({ params: { lang } }) => {
  const { results } = await import("../lib/data.json")
    .then((module) => module.default)
    .catch((error) => console.log(error));
  const dictionary = await getDictionary(lang);
  return (
    <main>
      <div className="container mx-auto grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Aside dictionary={dictionary} />

        <div className="content">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
            {results?.map((movie) => (
              <figure
                key={movie.id}
                className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
              >
                <Image
                  className="w-full object-cover"
                  src={movie.poster_path}
                  alt=""
                  width="14"
                  height="14"
                />
                <figcaption className="pt-4">
                  <h3 className="text-xl mb-1">{movie.title}</h3>
                  <p className="text-[#575A6E] text-sm mb-2">
                    Action/Adventure/Sci-fi
                  </p>
                  <div className="flex items-center space-x-1 mb-5">
                    <Image src="/star.svg" width={14} height={14} alt="" />
                    <Image src="/star.svg" width={14} height={14} alt="" />
                    <Image src="/star.svg" width={14} height={14} alt="" />
                    <Image src="/star.svg" width={14} height={14} alt="" />
                    <Image src="/star.svg" width={14} height={14} alt="" />
                  </div>
                  <Link
                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href={`movies/${movie.id}`}
                  >
                    <Image src="/tag.svg" width={14} height={14} alt="" />
                    <span>{dictionary.details}</span>
                  </Link>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
