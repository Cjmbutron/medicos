import { FaSearch, FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import styles from "../Styles/MedicosFav.module.css"

function MedicosFav() {

    
    //metodo para utilizar la API
    const [medicos , setMedicos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/favoritos')
            .then(response => response.json())
            .then(data => {
                console.log("datos de ka api: ", data);
                setMedicos(data)
            });
    }, []);

    //Metodo para enviar los mensajes a Whatsapp
    const handleWhatsAppClick = (phoneNumber) => {

        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };
    return (
        <div className={styles.contenedor}>

            <h1 className={styles.title}>
                Nuestros Médicos Preferidos
            </h1>

            <div className={styles.grid}>
                {
                     
                medicos.map(medico => (
                    <div className={styles.card} key={medico.id}>
                        <img className={styles.avatar} src={medico.foto} />

                        <div className={styles.content}>
                            <p className={styles.name}> Dr(a). {medico.nombres} </p>
                            <p className={styles.biography}> {medico.biography}</p>
                            <p className={styles.speciality}> especialidad {medico.especialidad} </p>
                            <p className={styles.email}> correo: {medico.email} </p>

                        </div>
                        <button className={styles.button} onClick={() => handleWhatsAppClick(medico.teléfono)}>
                            <FaWhatsapp style={{ margin: 5 }} /> contactar </button>
                    </div>
                ))} 
            
            </div>

        </div>
    )
}

export default MedicosFav;