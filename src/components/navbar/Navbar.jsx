import React, { useState } from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link to='hero' spy={true} smooth={true} offset={-100} duration={400}>
          <div className={styles.logo}>
            <h3>HACK HAFTASI</h3>
          </div>
        </Link>

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

      <div className={styles.navMobilContainer}>
        <Link
          to='hero'
          spy={true}
          smooth={true}
          offset={-100}
          duration={400}
          onClick={handleClose}
        >
          <div className={styles.logo}>
            <h3>HACK</h3>
            <h3>HAFTASI</h3>
          </div>
        </Link>
        <div
          className={`${styles.menuToggle} ${isOpen ? styles.change : ''}`}
          onClick={handleOpen}
        >
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
      </div>

      {isOpen && (
        <div className={styles.mobilMenu}>
          <ul>
            <li>
              <Link
                to='info'
                spy={true}
                smooth={true}
                offset={-100}
                duration={400}
                onClick={handleClose}
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
                onClick={handleClose}
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
                onClick={handleClose}
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
                onClick={handleClose}
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
                onClick={handleClose}
              >
                <span>Tiny</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
