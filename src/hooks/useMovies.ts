import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

export interface MovieResult {
    adult: boolean,
    id: number,
    original_language: string,
    original_title: string,
    title: string,
    backdrop_path: string | null,
    poster_path: string | null,
    overview: string,
    name?: string,
}

const userMovieList = (genres?: number | null) => {
  const [movieLists, setMoviesLists] = useState<MovieResult[]>();

  const fetchMovieList = async () => {
    try {
      const res = await apiClient.get("/discover/movie",{
        params: {
          with_genres: genres,
        }
      });
      setMoviesLists(res.data.results);
    //   console.log(res);
    } catch (error) {}
  };

  useEffect(() => {
    fetchMovieList();
  }, [genres]);

  return { movieLists };
};

export default userMovieList;

