import React from 'react';
import styles from './tiny.module.css';

const Tiny = () => {
  return (
    <div id='tiny' className={styles.tinyContainer}>
      <div className={styles.title}>
        <span>TINY</span>
      </div>
      <iframe
        loading='lazy'
        className='rounded-sm w-full h-[600px]'
        src='https://tinyai.id/hack-haftasi'
        frameBorder='0'
        title='Hack Haftası'
      ></iframe>
    </div>
  );
};

export default Tiny;
