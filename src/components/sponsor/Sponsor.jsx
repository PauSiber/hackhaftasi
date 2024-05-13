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
                    <img
                        onClick={function redirectToLinkedIn() {
                            window.open('https://pausiber.xyz/', '_blank');
                        }}
                        src='/images/pausiber-logo-cekirdek.png'
                        alt='pausiber_cekirdek_logo'
                    />
                </div>

                <div className={styles.img}>
                    <img
                        onClick={function redirectToLinkedIn() {
                            window.open('https://siberkulupler.com/', '_blank');
                        }}
                        src='/images/skb_logo.png'
                        alt='skb_logo'
                    />
                </div>

                <div className={styles.img}>
                    <img
                        onClick={function redirectToLinkedIn() {
                            window.open('https://ratel.com.tr/tr/', '_blank');
                        }}
                        src='/images/ratel_logo.webp'
                        alt='ratel_logo'
                    />
                </div>

                <div className={styles.img}>
                    <img
                        onClick={function redirectToLinkedIn() {
                            window.open('https://www.tubitak.gov.tr/', '_blank');
                        }}
                        src='/images/tubitak_logo.png'
                        alt='tubitak_logo'
                    />
                </div>

                <div className={styles.img}>
                    <img
                        onClick={function redirectToLinkedIn() {
                            window.open('https://secureway.com.tr/', '_blank');
                        }}
                        src='/images/secureWay.jpeg'
                        alt='secure_way_logo'
                    />
                </div>

                <div className={styles.img}>
                    <img
                        onClick={function redirectToLinkedIn() {
                            window.open('https://www.netinternet.com.tr/', '_blank');
                        }}
                        src='/images/netinternet.svg'
                        alt='netinternet_logo'
                    />
                </div>
                <div className={styles.img}>
                    <img
                        onClick={function redirectToLinkedIn() {
                            window.open('https://bento.me/turkiye-rust-community', '_blank');
                        }}
                        src='/images/turkiye_rust_community.jpg'
                        alt='turkiye_rust_community_logo'
                    />
                </div>
            </div>
        </div>
    );
};

export default Sponsor;
