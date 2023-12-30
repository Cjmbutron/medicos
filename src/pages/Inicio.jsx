import React from "react";
import styles from "../Styles/Inicio.module.css"
import Slider from "../Components/slider";
import Tarjetas from "../Components/Tarjetas"
import Banner from "../Components/Banner";
import MedicosFav from "../Components/MedicosFav";
import Noticias from "../Components/noticias";
import Footer from "../Components/footer";

function Inicio(){
    return (

        <div className={styles.contenedor}> 
            <div className={styles.div}>
                <Banner/>
                <Tarjetas/>
                <MedicosFav/>
                <Noticias/>
            </div>
            <div>
            </div>
            
         </div>

    );
}

export default Inicio