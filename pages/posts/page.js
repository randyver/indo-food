import { useRouter } from 'next/router';
import Head from 'next/head';
import { useState } from 'react';
import foodData from './data.json';
import styles from '/styles/Home.module.css';
import Link from 'next/link';
import Footer from '/pages/footer';

export default function Page() {
  const router = useRouter();
  const { region } = router.query;

  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const selectedRegion = foodData.regions && foodData.regions.find(
    (item) => item.name && item.name.toLowerCase() === (region && region.toLowerCase())
  );

  let filteredFoods = selectedRegion ? selectedRegion.foods : [];

  if (searchValue) {
    filteredFoods = filteredFoods.filter((food) =>
      food.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  return (
    <div>
      <Head>
        <title>{selectedRegion ? selectedRegion.name : 'Indo Food'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {selectedRegion ? (
        <div className={styles.container}>
          <h1>{selectedRegion.name}</h1>
          <div className={styles.searchContainer}>
            <div className={styles.searchBar}>
              <input
                type="text"
                value={searchValue}
                onChange={handleSearch}
                placeholder="Cari makanan"
              />
              <img src="/search.png" alt="Search" width="20px" />
            </div>
          </div>

          <div className={styles.foodContainer}>
            {filteredFoods.map((food) => (
              <div key={food.title}>
                <Link className={styles.cardFood} href={`/posts/content?food=${food.title}`} style={{ textDecoration: 'none' }}>
                  <img src={food.image} alt={food.title} />
                  <div className={styles.cardContent}>
                    <h3>{food.title}</h3>
                    <p>{food.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <Footer />
        </div>
      ) : (
        <div>Region not found</div>
      )}
    </div>
  );
}


