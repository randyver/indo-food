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
                <div className={styles.container}>
                    <h2>{title}</h2>
                    <img src={image} width="600px"></img>
                    <p style={{fontSize: '14pt'}}>{description}</p>
                    <Footer />
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