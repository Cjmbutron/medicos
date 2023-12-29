import React from 'react';
import styles from '../Styles/Menu.module.css'

function Cabecera() {

  return (
    <nav className={styles.menu}>
    <ul className={styles.ul}>
      <li className={styles.item}>
        <a href="/" className={styles.link}>Inicio</a>
      </li>
      <li className={styles.item}>
        <a href="/nosotros" className={styles.link}>Medicos</a>
      </li>
      <li className={styles.item}>
        <a href="/contacto" className={styles.link}>Contacto</a>
      </li>
    </ul>
  </nav>
  );

}

export default Cabecera;
