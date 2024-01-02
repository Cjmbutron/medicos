import styles from "../Styles/Banner.module.css"
import Slider from "./slider";

function Banner() {
    return (
        <div className={styles.contenedor}>
            <h1 className={styles.h1}> Encuentra medicos dispuestos a ayudarte </h1>
            <div >
                <p className={styles.p}>Conoce a nuestros medicos registrados en nuestra lista.</p>
                <button className={styles.button} > <a className={styles.button}  href='http://localhost:3000/nosotros'>  Explore</a></button>
            </div>
        </div>
    );
}

export default Banner
