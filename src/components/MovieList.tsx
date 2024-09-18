import userMovieList from "@/hooks/useMovies"
import MovieCard from "./MovieCard";
import { useContext } from "react";
import { GenresContext } from "@/contex/genres.context";

const MovieList = () => {
    const { genres} = useContext(GenresContext);
    const { movieLists } = userMovieList(genres);
    console.log(movieLists);
  return (
    <div className="p-3 mb-4">
        <h1 className="text-4xl font-semibold p-5r py-8">Movies</h1>
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-3">
        {movieLists?.map((movieList) => (
            <div key={movieList.id}>
                <MovieCard movieResult={movieList} />
            </div>
        ))}
    </div>
    </div>
  )
}

export default MovieList