import React from 'react';
import styles from './sponsor.module.css';

const allSponsors = [
    {
        webUrl: 'https://pausiber.xyz/',
        imgUrl: '/images/pausiber-logo-cekirdek.png',
        imgAlt: 'pausiber_cekirdek_logo',
    },
    {
        webUrl: 'https://siberkulupler.com/',
        imgUrl: '/images/skb_logo.png',
        imgAlt: 'skb_logo',
    },
    {
        webUrl: 'https://ratel.com.tr/tr/',
        imgUrl: '/images/ratel_logo.webp',
        imgAlt: 'ratel_logo',
    },
    {
        webUrl: 'https://www.tubitak.gov.tr/',
        imgUrl: '/images/tubitak_logo.png',
        imgAlt: 'tubitak_logo',
    },
    {
        webUrl: 'https://secureway.com.tr/',
        imgUrl: '/images/secureWay.jpeg',
        imgAlt: 'secure_way_logo',
    },
    {
        webUrl: 'https://www.netinternet.com.tr/',
        imgUrl: '/images/netinternet.svg',
        imgAlt: 'netinternet_logo',
    },
    {
        webUrl: 'https://lab2023.com/',
        imgUrl: '/images/lab2023.png',
        imgAlt: 'lab2023_logo',
    },
    // {
    //     webUrl: 'https://bento.me/turkiye-rust-community',
    //     imgUrl: '/images/turkiye_rust_community.jpg',
    //     imgAlt: 'turkiye_rust_community_logo',
    // },
    // {
    //     webUrl: 'https://magfiads.com/',
    //     imgUrl: '/images/magfiADS.png',
    //     imgAlt: 'mafiADS_logo',
    // },
];

const Sponsor = () => {
    return (
        <div id='sponsor' className={styles.container}>
            <div className={styles.title}>
                <span>SPONSORLAR</span>
            </div>
            <div
                className={styles.sponsors}
                style={{
                    justifyContent: allSponsors.length <= 3 ? 'flex-start' : 'center',
                }}
            >
                {allSponsors.map((sponsor) => (
                    <div className={styles.img}>
                        <img
                            onClick={function redirectToLinkedIn() {
                                window.open(sponsor.webUrl, '_blank');
                            }}
                            src={sponsor.imgUrl}
                            alt={sponsor.imgAlt}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sponsor;
