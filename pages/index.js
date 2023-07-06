import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Footer from './footer';

export default function Home() {

  const regions = [
    { name: 'Sumatera', icon: '/sumatera_icon.png' },
    { name: 'Jawa', icon: '/jawa_icon.png' },
    { name: 'Kalimantan', icon: '/kalimantan_icon.png' },
    { name: 'Sulawesi', icon: '/sulawesi_icon.png' },
    { name: 'Papua', icon: '/papua_icon.png' }
  ];

  return (
    <div className={styles.container}>


      <Head>
        <title>Indo Food</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.deskripsi}>
        <h1>Indonesian <span>Food</span></h1>
        <p>Makanan Indonesia adalah kekayaan kuliner yang menggabungkan beragam rasa, aroma, dan tradisi dari berbagai daerah di Indonesia.</p>
      </div>
      <div className={styles.grid}>
      {regions.map(region => (
        <Link href={`/posts/page?region=${region.name}`} className={styles.card} key={region.name}>
          <img src={region.icon} width="40" />
          <h4>{region.name}</h4>
        </Link>
      ))}
      </div>
      <Footer />


      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
