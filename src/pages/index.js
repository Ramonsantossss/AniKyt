import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './home.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home({ animes }) {
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Ajuste o número de slides mostrados em diferentes tamanhos de tela conforme necessário
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className={`${styles.main}`}>
      <h1 className={`${styles.title}`}>Procurar</h1>
      <form
        className={`${styles.form}`}
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
          className={`${styles.input}`}
          type="search"
          placeholder="Pesquisar anime..."
        />
      </form>
      <h1 className={`${styles.title}`}>Populares</h1>

      <Slider {...settings}>
        {animes?.map((item) => (
          <Link className={`${styles.link}`} key={item?.id} href={`/anime/${item?.id}`}>
            <div className="flex flex-col justify-between w-[200px]">
              <img
                className={`${styles.image}`}
                src={`https://cdn.appanimeplus.tk/img/${item?.category_icon}`}
                alt="Banner do Anime"
              />
              <p className={`${styles.text}`}>{item?.category_name}</p>
            </div>
          </Link>
        ))}
      </Slider>
    </main>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://animeland.appanimeplus.tk/videoweb/api.php?action=trendingcategory');
  const animes = await res.json();

  return { props: { animes } };
}