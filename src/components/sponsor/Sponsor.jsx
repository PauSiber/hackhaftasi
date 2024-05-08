import React from 'react';
import styles from './sponsor.module.css';

const Sponsor = () => {
  return (
    <div id='sponsor' className={styles.container}>
      <div className={styles.title}>
        <span>SPONSORLAR</span>
      </div>
      <div className={styles.sponsors}>
        <div className={styles.img}>
          <img src='/images/skb_logo.png' alt='' />
        </div>

        {/* <div className={styles.img}>
          <img src='/images/skb_logo.png' alt='' />
        </div>

        <div className={styles.img}>
          <img src='/images/skb_logo.png' alt='' />
        </div> */}
      </div>
    </div>
  );
};

export default Sponsor;
