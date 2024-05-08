import React from 'react';
import styles from './jury.module.css';

const Jury = () => {
  return (
    <div id='jury' className={styles.jury}>
      <div className={styles.title}>
        <span>JÜRİ</span>
      </div>
      <div
        className={styles.juryMembers}
        onClick={function redirectToLinkedIn() {
          window.open('https://www.linkedin.com/in/cagataycali/', '_blank');
        }}
      >
        <div className={styles.juryMember}>
          <div className={styles.img}>
            <img src='/images/CagatayCali.jpg' alt='' />
          </div>
          <div className={styles.memberName}>Çağatay ÇALI</div>
          <div className={styles.memberInfo}>
            <div>Software Engineer</div>
            <div>Amazon Web Services </div>
          </div>
        </div>

        <div className={styles.juryMember}>
          <div className={styles.img}>
            <img src='/images/CagatayCali.jpg' alt='' />
          </div>
          <div className={styles.memberName}>Çağatay ÇALI</div>
          <div className={styles.memberInfo}>
            <div>Software Engineer</div>
            <div>Amazon Web Services </div>
          </div>
        </div>

        <div className={styles.juryMember}>
          <div className={styles.img}>
            <img src='/images/CagatayCali.jpg' alt='' />
          </div>
          <div className={styles.memberName}>Çağatay ÇALI</div>
          <div className={styles.memberInfo}>
            <div>Software Engineer</div>
            <div>Amazon Web Services </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jury;
