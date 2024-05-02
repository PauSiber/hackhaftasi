import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h3>HACK HAFTASI</h3>
      </div>

      <div>
        <ul className={styles.navCenter}>
          <li className={styles.li}>
            <a href='www'>Bilgilendirme</a>
          </li>
          <li className={styles.li}>
            <a href='www'>Ödüller</a>
          </li>
          <li className={styles.li}>
            <a href='www'>Jüri</a>
          </li>
          <li className={styles.li}>
            <a href='www'>Sponsorlar</a>
          </li>
          <li className={styles.li}>
            <a href='www'>Tiny</a>
          </li>
        </ul>
      </div>

      <div className={styles.navEnd}>
        <button className={styles.button}>BAŞVUR</button>
        <button className={styles.button}>SPONSOR OL</button>
      </div>
    </div>
  );
};

export default Navbar;
