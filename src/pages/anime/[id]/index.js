// Anime.js
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styles from "./anime.module.css";
import EpisodePage from "./EpisodePage";

export default function Anime({ animeInfo, episodes }) {
  const [showVideo, setShowVideo] = useState({ url: "" });

  return (
    <Router>
      <main className={styles.main}>
        <aside className={styles.sidebar}>
          <h1 className={styles.categoryName}>Episodios</h1>
          <center>
            <img
              className={styles.categoryIcon}
              src={`https://cdn.appanimeplus.tk/img/${animeInfo?.[0]?.category_icon}`}
              alt="Category Icon"
            />
          </center>
        </aside>

        <section className={styles.episodeSection}>
          <header className={styles.episodeHeader}>
            <h1 className={styles.episodeTitle}>
              {animeInfo?.[0]?.category_name}
            </h1>
          </header>
          <ul className={styles.episodeList}>
            {episodes?.map((ep) => (
              <li key={ep?.video_id} className={styles.episodeItem}>
                <Link to={`/episode/${ep?.video_id}`}>
                  {ep?.title}
                </Link>
              </li>
            ))}
          </ul>

          {showVideo?.url && (
            <section className={styles.videoSection}>
              <button
                className={styles.closeButton}
                onClick={() => setShowVideo({ url: "" })}
              >
                Voltar
              </button>
              <video className={styles.video} src={showVideo?.url} controls />
            </section>
          )}
        </section>

        <Switch>
          <Route path="/episode/:episodeId">
            <EpisodePage episodes={episodes} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://animeland.appanimeplus.tk/videoweb/api.php?action=viewcategory&categoryid=${context.query.id}`
  );
  const animeInfo = await res.json();

  const episodesResponse = await fetch(
    `https://animeland.appanimeplus.tk/videoweb/api.php?action=category_videos&category_id=${context.query.id}`
  );

  const episodes = await episodesResponse.json();

  return { props: { animeInfo, episodes } };
}
