import styles from "../Styles/Noticias.module.css"


function Noticias() {
    return (
        <div className={styles.contenedor}>
            <div class="noticia">
                <h2 class="titulo-noticia">Título de la Noticia 1</h2>
                <p class="fecha">Fecha: 28 de diciembre de 2023</p>
                <p class="contenido">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam felis eu libero...</p>
            </div>

            <div class="noticia">
                <h2 class="titulo-noticia">Título de la Noticia 2</h2>
                <p class="fecha">Fecha: 27 de diciembre de 2023</p>
                <p class="contenido">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
            </div>
        </div>
    )
}

export default Noticias