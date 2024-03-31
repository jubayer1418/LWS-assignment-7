import Modal from "@/app/components/Modal";
import MovieDeatails from "@/app/components/MovieDeatails";
const Movie = async ({ params: { lang, id } }) => {
  return (
    <Modal>
      <MovieDeatails id={id} lang={lang} />
    </Modal>
  );
};

export default Movie;
