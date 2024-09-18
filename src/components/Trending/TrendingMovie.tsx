//@ts-nocheck

import useTrendingList from "@/hooks/useTrending";
import MovieCard from "../MovieCard";
import { MdOutlineExpandMore } from "react-icons/md";
import { useState } from "react";

const TrendingMovie = () => {
  const { trendingData } = useTrendingList("movie");
  console.log(trendingData)
  const [expand, setExpand] = useState(false);

  return (
    <div className="p-3 mb-4">
      <div
        className="flex items-center cursor-pointer "
        onClick={() => setExpand(!expand)}
      >
        <h1 className="text-4xl font-semibold p-5 py-8">Trending Movies</h1>
        <span className="text-4xl text-gray-500">
          <MdOutlineExpandMore />
        </span>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-y-3">
        {expand &&
          trendingData?.map((movie) => (
            <div key={movie.id}>
              <MovieCard movieResult={movie} />
            </div>
          ))}
        {!expand &&
          trendingData?.slice(0, 10).map((movie) => (
            <div key={movie.id}>
              <MovieCard movieResult={movie} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendingMovie;
