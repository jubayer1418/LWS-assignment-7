import movieList, { getDataById } from "@/app/lib/data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const id = parseInt(params?.id);
  console.log(id);

  const data = await getDataById(id);

  return NextResponse.json(data);
}
export async function PATCH(request, { params }) {
  const movie = await request.json();
  const movieId = params.id;
  const movieIndex = movieList.results.findIndex(
    (movie) => movie.results.id === parseInt(movieId)
  );
  movieList.results[movieIndex].text = movie.text;

  return Response.json(movieList.results[movieIndex]);
}

export async function DELETE(request, { params }) {
  const movieId = params.id;
  const movieIndex = movieList.results.findIndex(
    (movie) => movie.results.id === parseInt(movieId)
  );
  const movieToDelete = movieList.results[movieIndex];
  movieList.results.splice(movieIndex, 1);

  return Response.json(movieToDelete);
}
