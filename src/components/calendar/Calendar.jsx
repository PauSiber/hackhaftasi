import React, { useState } from 'react';
import styles from './calendar.module.css';

const calendar = [
  {
    time: '09 : 00',
    day: '21 Aralık 2024',
    title: 'Açılış(Etkinlik Başlangıcı)',
  },
  {
    time: '13 : 00',
    day: '21 Aralık 2024',
    title: 'Öğle Arası',
  },
  {
    time: '18 : 00',
    day: '21 Aralık 2024',
    title: 'Akşam Yemeği Molası',
  },
  {
    time: '19 : 00',
    day: '21 Aralık 2024',
    title: 'Sabaha Kadar Etkinliğe Devam    ',
  },
  {
    time: '08 : 00',
    day: '22 Aralık 2024',
    title: '2. Gün: Kahvaltı Molası',
  },
  {
    time: '12 : 00',
    day: '22 Aralık 2024',
    title: '2. Gün: Öğle Arası',
  },
  {
    time: '15 : 00',
    day: '22 Aralık 2024',
    title: '2. Gün: Etkinlik Bitişi',
  },
  {
    time: '17 : 00',
    day: '22 Aralık 2024',
    title: '2. Gün: Ödül Töreni',
  },
  {
    time: '18 : 00',
    day: '22 Aralık 2024',
    title: '2. Gün: Kapanış',
  },
];

const Calendar = () => {
  //   const [selectedDay, setSelectedDay] = useState('11 Mayıs 2024');

  //   const handleSelectDay = (e) => {
  //     setSelectedDay(e.target.value);
  //   };

  //   console.log('selectedDay', selectedDay);

  return (
    <div id='calendar' className={styles.container}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionTitle}>
          <span>Hackathon</span>
          <span>Takvimi</span>
        </div>
        {/* <div className={styles.sectionButtons}>
          <button
            className={styles.button}
            style={{
              backgroundColor:
                selectedDay === '11 Mayıs 2024'
                  ? 'var(--bgSoft)'
                  : 'var(--templateColor)',
            }}
            value={'11 Mayıs 2024'}
            onClick={handleSelectDay}
          >
            11 Mayıs 2024
          </button>
          <button
            className={styles.button}
            style={{
              backgroundColor:
                selectedDay === '12 Mayıs 2024'
                  ? 'var(--bgSoft)'
                  : 'var(--templateColor)',
            }}
            value={'12 Mayıs 2024'}
            onClick={handleSelectDay}
          >
            12 Mayıs 2024
          </button>
        </div> */}
      </div>
      <div className={styles.header}>
        <span> 21 Aralık 2024 - 22 Aralık 2024 </span>
      </div>
      <div className={styles.content}>
        {calendar.map((item, index) => {
          return (
            <div className={styles.item} key={index}>
              <div className={styles.time}>{item.time}</div>
              <div className={styles.detail}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.location}>Teknokent - Hackerspace</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
