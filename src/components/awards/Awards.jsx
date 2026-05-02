import React from 'react';
import styles from './awards.module.css';

const Awards = () => {
    return (
        <div id='awards' className={styles.awardsContainer}>
            <span className={styles.title}>Ödüller</span>
            <div className={styles.awards}>
                <div className={`${styles.award1} ${styles.col}`}>
                    <span className={styles.awardTitle}>
                        1. Takım <br /> Üyelerine
                    </span>
                    <span className={styles.amount}>?</span>
                    {/* <span className={styles.amount}>1000 TL</span> */}
                    {/* <span className={styles.couponLabel}>Alışveriş Kuponu</span> */}
                </div>
                <div className={`${styles.award2} ${styles.col}`}>
                    <span className={styles.awardTitle}>
                        2. Takım <br /> Üyelerine
                    </span>
                    <span className={styles.amount}>?</span>
                    {/* <span className={styles.amount}>750 TL</span> */}
                    {/* <span className={styles.couponLabel}>Alışveriş Kuponu</span> */}
                </div>
                <div className={`${styles.award3} ${styles.col}`}>
                    <span className={styles.awardTitle}>
                        3. Takım <br /> Üyelerine
                    </span>
                    <span className={styles.amount}>?</span>
                    {/* <span className={styles.amount}>500 TL</span> */}
                    {/* <span className={styles.couponLabel}>Alışveriş Kuponu</span> */}
                </div>
            </div>
        </div>
    );
};

export default Awards;
