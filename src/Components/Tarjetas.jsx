import React from 'react';
import styles from '../Styles/Tarjetas.module.css';

function Tarjetas() {
  const categories = [
    { 
      id: 1,
      title: 'Odontologia',
      image: 'ropa.jpg'
    },
    {
       id: 2,
      title: 'Cardiologia',
      image: 'tecnologia.jpg'
    },
    {
       id: 3,
      title: 'ginecologia',
      image: 'muebles.jpg'
    },
    {
       id: 4,
      title: 'General',
      image: 'muebles.jpg'
    }
  ];

  return (
    <div className={styles.container}>
      {categories.map(cat => (
        <div key={cat.id} className={styles.card}>
          <div className={styles.image}>
            <img src={cat.image} />
          </div>
          <h3 className={styles.h3}>{cat.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Tarjetas;