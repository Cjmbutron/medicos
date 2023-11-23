import React from "react";
import styles from "../Styles/Inicio.module.css"
import Slider from "../Components/slider";
import Tarjetas from "../Components/Tarjetas"

function Inicio(){
    return (

        <div className={styles.contenedor}> 
            <h1 className={styles.h1}>
                <Slider/>
                
            </h1>
            <div>
            <Tarjetas />
            </div>
            
         </div>

    );
}

export default Inicio