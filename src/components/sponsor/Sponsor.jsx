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
