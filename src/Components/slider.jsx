import { useState } from 'react';
import styles from '../Styles/Slider.module.css';

function Slider() {
  const [active, setActive] = useState(0);

  // declaracion de los contenidos de los slides
  const slides = [
    {
      image: 'image1.png',
      title: 'Título 1',
      desc: 'Descripción 1',
      btnText: 'Siguiente'
    },
    {
        image: 'image2.jpg', 
        title: 'Título 2',
        desc: 'Descripción 2',
        btnText: 'Siguiente'
    },
    {
        image: 'image3.jpg', 
        title: 'Título 3',
        desc: 'Descripción 3',
        btnText: 'Siguiente'
      }
  ];

  return (
    
    <div className={styles.slider}>
        <div 
          className={styles.slide}
          style={{backgroundImage: `url(${slides[active].image})`}}
        >
          <div className={`${styles.column} ${styles.left}`}>
            <div className={styles.details}>
              <h2>{slides[active].title}</h2>
              <p>{slides[active].desc}</p>
              <button onClick={() => setActive(prev => prev < slides.length - 1 ? prev + 1 : 0)}>{slides[active].btnText}</button>
            </div>
          </div>
          <div className={`${styles.column} ${styles.right}`}>
            {/* Imagen grande */}
          </div>
        </div>

        <div className={styles.actions}>
          {/* Botones prev / next */}
        </div>
        
        <div className={styles.indicators}>
          {/* Indicadores */}  
        </div>
      
    </div>
  );
}

export default Slider;