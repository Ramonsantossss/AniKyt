export default function Search({ animes }) {
  const router = useRouter();

  return (
    <main>
      <h1>Search other</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();
          const query = event.target[0].value;

          if (query.trim().length) {
            router.push(`/search?q=${query}`);
          }
        }}
      >
        <input
          type="search"
          placeholder="Search anime..."
        />
      </form>

      <h1>Results</h1>

      <ul>
        {animes?.map((item) => (
          <li key={item?.category_id}>
            <img
              src={`https://cdn.appanimeplus.tk/img/${item?.category_icon}`}
              alt="Anime Banner"
            />
            <p>{item?.category_name}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getServerSideProps(props) {
  const query = props.query.q;
  const res = await fetch(`https://animeland.appanimeplus.tk/videoweb/api.php?action=searchvideo&searchword=${query}`);
  const animes = await res.json();

  return { props: { animes } };
}
