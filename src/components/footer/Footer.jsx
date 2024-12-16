import React from 'react';
import styles from './footer.module.css';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaLink } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-credits']}>
                <ul className={styles['left-side']}>
                    <li>© 2024 PAUSIBER | Tüm Hakları Saklıdır</li>
                </ul>

                <ul className={styles['right-side']}>
                    <li className={styles.icons}>
                        <a href='https://pausiber.xyz/'>
                            <FaLink className={styles.icon} />
                        </a>
                        <a href='https://twitter.com/SiberPau'>
                            <FaSquareXTwitter className={styles.icon} />
                        </a>
                        <a href='https://www.instagram.com/pausiber/'>
                            <FaInstagramSquare className={styles.icon} />
                        </a>
                        <a href='https://www.linkedin.com/company/pausiber/?viewAsMember=true'>
                            <FaLinkedin className={styles.icon} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
