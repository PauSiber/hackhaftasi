import React from 'react';
import styles from './infox.module.css';

const Infos = () => {
  return (
    <div id='info' className={styles.infosContainer}>
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
            Takımlar 1 ile 3 kişi arasında olmalıdır.
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
            Mühendislik Fakültesi A blok Kınıklı Pamukkale/Denizli
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Infos;
