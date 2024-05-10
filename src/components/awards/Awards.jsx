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
          <div className={styles.question}>?</div>
          {/* <img
            className={styles.img}
            src=''
            alt=''
          /> */}
          <span className={styles.awardName}></span>
        </div>
        <div className={`${styles.award1} ${styles.col}`}>
          <span className={styles.awardTitle}>
            1. Takım <br /> Üyelerine
          </span>
          <div className={styles.question}>?</div>
          {/* <img
            className={styles.img}
            src=''
            alt=''
          /> */}
          <span className={styles.awardName}></span>
        </div>
        <div className={`${styles.award3} ${styles.col}`}>
          <span className={styles.awardTitle}>
            3. Takım <br /> Üyelerine
          </span>
          <div className={styles.question}>?</div>
          {/* <img
            className={styles.img}
            src=''
            alt=''
          /> */}
          <span className={styles.awardName}></span>
        </div>
      </div>
    </div>
  );
};

export default Awards;
