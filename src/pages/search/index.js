import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./searchStyles.css"; // Import the CSS file

export default function Search({ animes }) {
  const router = useRouter();

  return (
    <main className={styles.main}>
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

      <h1 className={styles.resultsTitle}>Results</h1>

      <ul className={styles.results}>
        {animes?.map((item) => (
          <Link
            className={styles.resultItem}
            key={item?.category_id}
            href={`/anime/${item?.category_id}`}
          >
            <li className={styles.resultItem}>
              <img
                className={styles.resultImg}
                src={`https://cdn.appanimeplus.tk/img/${item?.category_icon}`}
                alt="Anime Banner"
              />
              <p className={styles.resultText}>{item?.category_name}</p>
            </li>
          </Link>
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
