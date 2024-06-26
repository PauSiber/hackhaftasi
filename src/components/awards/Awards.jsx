import React from 'react';
import styles from './awards.module.css';

const Awards = () => {
  return (
    <div id='awards' className={styles.awardsContainer}>
      <span className={styles.title}>Ödüller</span>
      <div className={styles.awards}>
        <div className={`${styles.award2} ${styles.col}`}>
          <span className={styles.awardTitle}>
            2. Takım <br /> Üyelerine
          </span>

          <img className={styles.img} src='/images/second_prize.png' alt='' />
        </div>
        <div className={`${styles.award1} ${styles.col}`}>
          <span className={styles.awardTitle}>
            1. Takım <br /> Üyelerine
          </span>

          <img className={styles.img} src='/images/first_prize.png' alt='' />
        </div>
        <div className={`${styles.award3} ${styles.col}`}>
          <span className={styles.awardTitle}>
            3. Takım <br /> Üyelerine
          </span>

          <img className={styles.img} src='/images/third_prize.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Awards;
