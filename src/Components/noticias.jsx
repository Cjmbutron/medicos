import styles from "../Styles/Noticias.module.css"
import img1 from "../imagenes/family-doctor-045.jpg"
import img2 from "../imagenes/family-doctor-046.jpg"


function Noticias() {
    return (
        <div className={styles.contenedor}>
            <div className={styles.noticia}>
                <img src={img1} className={styles.imagen}></img>
                <h2 className={styles.titulo}>Título de la Noticia 1</h2>
                <p class="fecha">Fecha: 28 de diciembre de 2023</p>
                <p class="contenido">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam felis eu libero...</p>
            </div>

            <div className={styles.noticia}>
                <img src={img2} className={styles.imagen}></img>
                <h2 className={styles.titulo}>Título de la Noticia 2</h2>
                <p class="fecha">Fecha: 27 de diciembre de 2023</p>
                <p class="contenido">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
            </div>
        </div>
    )
}

export default Noticias