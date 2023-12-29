import styles from "../Styles/Banner.module.css"
import Slider from "./slider";

function Banner() {
    return (
        <div className={styles.contenedor}>
            <h1 className={styles.h1}> Encuentra medicos dispuestos a ayudarte </h1>
            <Slider/>

        </div>
    );
}

export default Banner
