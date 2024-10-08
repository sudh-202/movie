import { useNavigate } from "react-router";
import { Card, CardContent } from "./ui/card";
import { MovieResult } from "@/hooks/useMovies";

interface Props {
  movieResult: MovieResult;
}

const MovieCard = ({ movieResult }: Props) => {
  const navigate = useNavigate();
  
  return (
    <Card className="border-0" onClick={() => navigate(`/player/${movieResult.id}`)}>
      <CardContent>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieResult.poster_path}`}
            alt={movieResult.title}
            className="hover:opacity-80 transition-all"
          />
          <h1 className="mt-3">
            {movieResult.title || movieResult.original_title}
          </h1>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
