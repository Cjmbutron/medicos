import React from 'react';
import styles from '../Styles/Tarjetas.module.css';

const ImgEsp = require.context('../imagenes')

function Tarjetas() {
  const categories = [
    { 
      id: 1,
      title: 'Odontologia',
      image:  ImgEsp('./odontologia.png')
    },
    {
       id: 2,
      title: 'Cardiologia',
      image: ImgEsp('./cardiologia.png')
    },
    {
       id: 3,
      title: 'ginecologia',
      image: ImgEsp('./ginecologia.png')
    },
    {
       id: 4,
      title: 'General',
      image: ImgEsp('./medicina-general.png')
    }
  ];

  return (
    <div className={styles.container}>

      {categories.map(cat => (
        <div key={cat.id} className={styles.card}>
          <div className={styles.image}>
            <img src={cat.image} className={styles.image} />
          </div>
          <h3 className={styles.h3}>{cat.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Tarjetas;