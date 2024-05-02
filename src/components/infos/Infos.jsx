import React from 'react';
import styles from './infox.module.css';

const Infos = () => {
  return (
    <div className={styles.infosContainer}>
      <ul className={styles.infos}>
        <li className={styles.infosItem}>
          <div className={styles.title}>Hack Haftasında Sizi Ne Bekliyor?</div>
          <div className={styles.descr}>
            Hack Haftası süresince sektör profesyonelleriyle tanışıp network
            edinme ve mentorluk alma fırsatı yakalayabilirsiniz.Yeni
            teknolojileri ve yöntemleri deneyerek bilgi birikiminizi
            arttırabilir, projelerinizi diğer takımlarla ve mentorlarla
            paylaşarak geri bildirim alma imkanına sahip olabilirsiniz.
          </div>
        </li>

        <hr />
        <li className={styles.infosItem}>
          <div className={styles.title}>Katılım Şartları?</div>
          <div className={styles.descr}>
            Takımlar 2 ile 5 kişi arasında olmalıdır.
            <br />
            Katılımcılar arasında olumlu ve yapıcı bir iletişim beklenmektedir.
          </div>
        </li>

        <hr />

        <li className={styles.infosItem}>
          <div className={styles.title}>Bizimle İletişime Geçin</div>
          <div className={styles.descr}>
            <a
              href='mailto:info@hackhaftasi.com'
              class='text-blue-600 underline'
            >
              info@hackhaftasi.com
            </a>{' '}
            adresinden bize ulaşabilirsiniz.
          </div>
        </li>

        <hr />

        <li className={styles.infosItem}>
          <div className={styles.title}>Hack Haftası Nerede Gerçekleşecek?</div>
          <div className={styles.descr}>
            Hackerspace (Pamukkale Üniversitesi - Teknokent Binası)
            <br />
            <b>Adres:</b> Çamlaraltı, C, 20070, Hüseyin Yılmaz Cd. No:67, 20160
            Merkezefendi/Denizli
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Infos;
