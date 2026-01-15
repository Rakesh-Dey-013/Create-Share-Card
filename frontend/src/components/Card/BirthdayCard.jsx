import { useState } from 'react';
import styles from './BirthdayCard.module.css';
import cakeImg from '../../assets/birthday-cake.png'

const BirthdayCard = ({ card, isPreview = false }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    // <div className={styles.container}>
      <div className={`${styles.card} ${isActive ? styles.cardActive : ''}`}>
        <div className={styles.lightLayer}>
          <div className={styles.slit}></div>
          <div className={styles.lumen}>
            <div className={styles.min}></div>
            <div className={styles.mid}></div>
            <div className={styles.hi}></div>
          </div>
          <div className={styles.darken}>
            <div className={styles.sl}></div>
            <div className={styles.ll}></div>
            <div className={styles.slt}></div>
            <div className={styles.srt}></div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.icon}>
            <h5 className={styles.text}>
              <img src={cakeImg} alt="" className={styles.cakeImg}/>
            </h5>
            <h2 className={styles.text}>Happy Birthday</h2>
            <h1 className={`${styles.text} ${styles.name}`}>{card.name}</h1>
          </div>
          <div className={styles.bottom}>
            {/* <h4 className='text-xl'>From Rakesh</h4> */}
            <p className={styles.message}>{card.message}</p>
            <div 
              className={`${styles.toggle} ${isActive ? styles.active : ''}`}
              onClick={() => setIsActive(!isActive)}
            >
              <div className={styles.handle}></div>
              <span>Activate Lumen</span>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default BirthdayCard;