import MovieDeatails from "@/app/components/MovieDeatails";
const Movie = async ({ params: { lang, id } }) => {
  return <MovieDeatails id={id} lang={lang} />;
};

export default Movie;
