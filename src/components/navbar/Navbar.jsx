import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <h3>HACK HAFTASI</h3>
        </div>

        <div>
          <ul className={styles.navCenter}>
            <li className={styles.li}>
              <Link
                to='info'
                spy={true}
                smooth={true}
                offset={-100}
                duration={400}
              >
                <span>Bilgilendirme</span>
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                to='awards'
                spy={true}
                smooth={true}
                offset={-100}
                duration={400}
              >
                <span>Ödüller</span>
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                to='jury'
                spy={true}
                smooth={true}
                offset={-100}
                duration={400}
              >
                <span>Jüri</span>
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                to='sponsor'
                spy={true}
                smooth={true}
                offset={-100}
                duration={400}
              >
                <span>Sponsorlar</span>
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                to='tiny'
                spy={true}
                smooth={true}
                offset={-100}
                duration={400}
              >
                <span>Tiny</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.navEnd}>
          <button className={styles.button}>BAŞVUR</button>
          <button className={styles.button}>SPONSOR OL</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
