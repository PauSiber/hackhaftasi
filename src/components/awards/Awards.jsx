import React from 'react';
import styles from './awards.module.css';

const Awards = () => {
  return (
    <div className={styles.awardsContainer}>
      <span className={styles.title}>Ödüller</span>
      <div className={styles.awards}>
        <div className={`${styles.award2} ${styles.col}`}>
          <span className={styles.awardTitle}>
            2. Takım <br /> Üyelerine
          </span>
          <img src='https://hackathon.aa.com.tr/images/IPadPro.png' alt='' />
          <span className={styles.awardName}>Ipad Pro</span>
        </div>
        <div className={`${styles.award1} ${styles.col}`}>
          <span className={styles.awardTitle}>
            1. Takım <br /> Üyelerine
          </span>
          <img src='https://hackathon.aa.com.tr/images/MacbookPro.png' alt='' />
          <span className={styles.awardName}>Macbook Pro</span>
        </div>
        <div className={`${styles.award3} ${styles.col}`}>
          <span className={styles.awardTitle}>
            3. Takım <br /> Üyelerine
          </span>
          <img src='https://hackathon.aa.com.tr/images/AirPodsPro.png' alt='' />
          <span className={styles.awardName}>AirPods Pro</span>
        </div>
      </div>
    </div>
  );
};

export default Awards;
