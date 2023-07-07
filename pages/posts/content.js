import { useRouter } from 'next/router';
import Head from 'next/head';
import foodData from './data.json';
import styles from '/styles/Home.module.css';
import Footer from '/pages/footer';

export default function Content() {
    
    const router = useRouter();
    const { food } = router.query;

    let selectedFood = null;

    for (const region of foodData.regions) {
        const foundFood = region.foods.find(
            (item) => item.title && item.title.toLowerCase() === (food && food.toLowerCase())
    );

    if (foundFood) {
        selectedFood = foundFood;
        break;
        }
    }

    if (selectedFood) {
        const { title, description, image } = selectedFood;
        return (
            <div>
                <div className={`${styles.boxed}`}>
                    <h2>{title}</h2>
                    <img src={image} className={styles.imgCont}></img>
                    <p className={styles.desc} style={{fontSize: '12pt'}}>{description}</p>
                </div>
            </div>
        )
    }
    else{
        return (
            <div>Makanan tidak ditemukan.</div>
        )
    }

}