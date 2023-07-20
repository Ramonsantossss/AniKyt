// EpisodePage.js
import React from "react";
import { useParams } from "react-router-dom";

const EpisodePage = ({ episodes }) => {
  const { episodeId } = useParams();
  const episode = episodes.find((ep) => ep.video_id === episodeId);

  if (!episode) {
    return <div>Episódio não encontrado.</div>;
  }

  return (
    <div>
      <button onClick={() => window.history.back()}>Voltar</button>
      <video src={episode.sdlocation || episode.location} controls />
    </div>
  );
};

export default EpisodePage;
