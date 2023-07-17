export default function Anime({ animeInfo, episodes }) {
  const [showVideo, setShowVideo] = useState({ url: "" });

  return (
    <>
      <main>
        <aside>
          <h1>{animeInfo?.[0]?.category_name}</h1>
          <img src={`https://cdn.appanimeplus.tk/img/${animeInfo?.[0]?.category_icon}`} />
        </aside>

        <section>
          <header>
            <h1>Episodes</h1>
          </header>
          <ul>
            {episodes?.map((ep) => (
              <li key={ep?.video_id}>
                <button
                  onClick={() => {
                    setShowVideo({ url: ep?.location || ep?.sdlocation });
                  }}
                >
                  #{ep?.video_id} - {ep?.title}
                </button>
              </li>
            ))}
          </ul>

          {showVideo?.url && (
            <section>
              <button onClick={() => setShowVideo()}>❌️</button>
              <video src={showVideo?.url} controls />
            </section>
          )}
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://animeland.appanimeplus.tk/videoweb/api.php?action=viewcategory&categoryid=${context.query.id}`);
  const animeInfo = await res.json();

  const episodesResponse = await fetch(`https://animeland.appanimeplus.tk/videoweb/api.php?action=category_videos&category_id=${context.query.id}`);
  const episodes = await episodesResponse.json();

  return { props: { animeInfo, episodes } };
}
