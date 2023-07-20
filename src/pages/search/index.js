import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./search.module.css"; // Import the CSS module

export default function Search({ animes }) {
  const router = useRouter();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Search other</h1>
      <form
        className={styles.form}
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
          className={styles.input}
          type="search"
          placeholder="Search anime..."
        />
      </form>

      <h1 className={styles.results-title}>Results</h1>

      <ul className={styles.results-list}>
        {animes?.map((item) => (
          <Link
            className={styles.anime-item}
            key={item?.category_id}
            href={`/anime/${item?.category_id}`}
          >
            <li className={styles.anime-item}>
              <img
                className={styles.img}
                src={`https://cdn.appanimeplus.tk/img/${item?.category_icon}`}
                alt="Anime Banner"
              />
              <p className={styles.text}>{item?.category_name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}

export async function getServerSideProps(props) {
  const query = props.query.q;
  const res =
    await fetch(`https://animeland.appanimeplus.tk/videoweb/api.php?action=searchvideo&searchword=${query}
  `);
  const animes = await res.json();

  return { props: { animes } };
}
