import { useEffect, useState } from 'react';
import styles from './hero.module.css';
import { MdOutlinePlace } from 'react-icons/md';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        gün: Math.floor(difference / (1000 * 60 * 60 * 24)),
        saat: Math.floor((difference / (1000 * 60 * 60)) % 24),
        dakika: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className={styles.times} key={interval}>
        <div className={styles.time}>{timeLeft[interval]}</div>
        <div className={styles.text}> {interval}</div>
      </span>
    );
  });

  return (
    <div className={styles.timer}>
      {timerComponents.length ? timerComponents : <span>Event is over!</span>}
    </div>
  );
};

const Hero = () => {
  return (
    <div id='hero' className={styles.heros}>
      <div className={styles.hero}>
        <div className={styles.leftSide}>
          <span className={styles.subTitle}>PAUSIBER</span>
          <h1 className={styles.mainTitle}>HACKATHON</h1>
          <p className={styles.mainContent}>
            Teknolojinin sınırlarını zorlamaya hazır mısınız? Hackathon
            etkinliğimize katılın ve yaratıcılığınızı keşfedin!
          </p>
          <p className={styles.content}>Keşfet, Öğren, Kodla</p>
          <div className={styles.date}>
            <span className={styles.days}>13-14</span>
            <span className={styles.fullDay}>Aralık 2025</span>
            <span className={styles.location}>
              <MdOutlinePlace className={styles.icon} />
              Mühendislik Fakültesi/Denizli
            </span>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.logoContainer}>
            <img src='/images/pausiber-logo.png' alt='' />
          </div>
        </div>
      </div>
      <div className={styles.timerContainer}>
        <div>
          <span className={styles.timerDesc}>Kalan süre: </span>
        </div>
        <div className={styles.timer}>
          <CountdownTimer targetDate={new Date('2025-12-13T00:00:00')} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
