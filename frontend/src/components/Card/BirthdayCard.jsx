import { useState } from 'react';
import styles from './BirthdayCard.module.css';
import cakeImg from '../../assets/birthday-cake.png';
import loveImg from '../../assets/love-letter.png';

const BirthdayCard = ({ card, isPreview = false }) => {
  const [isActive, setIsActive] = useState(false);

  // Determine card type
  const cardType = card?.category || 'birthday';
  
  // Get content based on card type
  const getCardContent = () => {
    if (cardType === 'birthday') {
      return {
        icon: cakeImg,
        alt: "Birthday Cake",
        title: "Happy Birthday",
        defaultMessage: "Wishing you a day filled with happiness and joy!",
        toggleText: "Activate Celebration",
        iconMarginClass: "ml-21" // ml-20 ≈ 5rem (80px)
      };
    } else {
      return {
        icon: loveImg,
        alt: "Love Letter",
        title: "I Love You",
        defaultMessage: "You mean everything to me!",
        toggleText: "Activate Love",
        iconMarginClass: "ml-11" // ml-12 ≈ 3rem (48px)
      };
    }
  };

  const { icon, alt, title, defaultMessage, toggleText, iconMarginClass } = getCardContent();

  return (
    <div className={`${styles.card} ${isActive ? styles.cardActive : ''} ${cardType === 'proposal' ? styles.proposalCard : ''}`}>
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
            <img 
              src={icon} 
              alt={alt} 
              className={`h-20 w-20 ${iconMarginClass}`} // Tailwind classes
            />
          </h5>
          <h2 className={styles.text}>{title}</h2>
          <h1 className={`${styles.text} ${styles.name}`}>{card?.name || "Friend"}</h1>
        </div>
        <div className={styles.bottom}>
          <p className={styles.message}>{card?.message || defaultMessage}</p>
          <div 
            className={`${styles.toggle} ${isActive ? styles.active : ''}`}
            onClick={() => setIsActive(!isActive)}
          >
            <div className={styles.handle}></div>
            <span>{toggleText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;