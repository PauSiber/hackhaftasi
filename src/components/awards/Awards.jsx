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
          {/* <div className={styles.questionmark}>?</div> */}
          <img className={styles.img} src='/images/prize2.png' alt='' />
        </div>
        <div className={`${styles.award1} ${styles.col}`}>
          <span className={styles.awardTitle}>
            1. Takım <br /> Üyelerine
          </span>
          {/* <div className={styles.questionmark1}>?</div> */}
          <img className={styles.img} src='/images/prize1.png' alt='' />
        </div>
        <div className={`${styles.award3} ${styles.col}`}>
          <span className={styles.awardTitle}>
            3. Takım <br /> Üyelerine
          </span>
          {/* <div className={styles.questionmark}>?</div> */}
          <img className={styles.img} src='/images/prize3.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Awards;
