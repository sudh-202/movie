import { useNavigate } from "react-router";
import { Card, CardContent } from "./ui/card"
import {  TvShowResult } from "@/hooks/useTvShow"

interface Props {
    tvShowResult: TvShowResult;
  };
  

const TvShowCard = ({ tvShowResult }: Props) => {
  const navigate = useNavigate();
  return (
    <Card className="border-0"  onClick={() => {
      navigate(`/player2/${tvShowResult.id}`)
    }}>
      
      <CardContent className="p-4">
        <div>
          <img
            src={tvShowResult.poster_path ? `https://image.tmdb.org/t/p/w500${tvShowResult.poster_path}` : '/path/to/default_image.jpg'}
            alt="poster"
            className="hover:opacity-80 transition-all"
          />
          <h1 className="mt-3">{tvShowResult.name}</h1>
        </div>
      </CardContent>
    </Card>
  );
};

export default TvShowCard;
