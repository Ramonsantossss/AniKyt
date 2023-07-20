import { useRouter } from "next/router";
import { useEffect } from "react";

const EpisodePage = ({ episodes }) => {
  const router = useRouter();
  const { episodeId } = router.query;
  const episode = episodes.find((ep) => ep.video_id === episodeId);

  useEffect(() => {
    if (!episode) {
      // Episódio não encontrado, redirecionar para a página anterior
      router.back();
    }
  }, [episode, router]);

  if (!episode) {
    // Renderize algo ou uma página de carregamento enquanto espera o redirecionamento
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <button onClick={() => router.back()}>Voltar</button>
      <video src={episode.sdlocation || episode.location} controls />
    </div>
  );
};

export default EpisodePage;
