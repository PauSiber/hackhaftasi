import styles from './hero.module.css';
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles['left-side']}>
        <h1 className={styles.title}>HACK HAFTASI</h1>
        <p className={styles['first-text']}>
          Türkiye'nin farklı illerinde her ayın üçüncü haftasında düzenlenen
          hackathon etkinliklerini keşfedin ve katılın.
        </p>
        <span className={styles['second-text']}>
          Birlikte yeni fikirler keşfetmek, projeler geliştirmek ve teknolojiyi
          ileri taşımak için buradayız. Hazır mısınız?
        </span>
      </div>
      <div className={styles['right-side']}></div>
    </div>
  );
};

export default Hero;
