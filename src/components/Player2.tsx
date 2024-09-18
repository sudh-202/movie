import { useParams } from "react-router";

const Player = () => {
  const { player2Id } = useParams();
  const movieUrl = `https://vidsrc.xyz/embed/tv/${player2Id}`;
  return (
    <div>
      <iframe
        className="w-full h-screen "
        allow="autoplay; encypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        src={movieUrl}
      ></iframe>
    </div>
  );
};

export default Player;
