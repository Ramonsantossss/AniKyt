import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ animes }) {
  const router = useRouter();

  return (
    <main>
      <h1>Search</h1>
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
      <h1>Trending</h1>

      <ul>
        {animes?.map((item) => (
          <Link
            key={item?.id}
            href={`/anime/${item?.id}`}
          >
            <li>
              <img
                src={`https://cdn.appanimeplus.tk/img/${item?.category_icon}`}
                alt="Anime Banner"
              />
              <p>{item?.category_name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://animeland.appanimeplus.tk/videoweb/api.php?action=trendingcategory");
  const animes = await res.json();

  return { props: { animes } };
}
