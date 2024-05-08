import React, { useState } from 'react';
import styles from './calendar.module.css';

const calendar = [
  {
    time: '09 : 00',
    day: '11 Mayıs 2024',
    title: 'Açılış',
  },
  {
    time: '12 : 00',
    day: '11 Mayıs 2024',
    title: 'Öğle Arası',
  },
  {
    time: '18 : 00',
    day: '11 Mayıs 2024',
    title: 'Kapanış',
  },
  {
    time: '09 : 00',
    day: '12 Mayıs 2024',
    title: '2. Gün Açılış',
  },
  {
    time: '12 : 00',
    day: '12 Mayıs 2024',
    title: '2. Gün Öğle Arası',
  },
  {
    time: '17 : 00',
    day: '12 Mayıs 2024',
    title: '2. Gün Ödül Töreni',
  },
  {
    time: '18 : 00',
    day: '12 Mayıs 2024',
    title: '2. Gün Kapanış',
  },
];

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState('11 Mayıs 2024');

  const handleSelectDay = (e) => {
    setSelectedDay(e.target.value);
  };

  console.log('selectedDay', selectedDay);

  return (
    <div className={styles.container}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionTitle}>
          <span>Hackhaton</span>
          <span>Takvimi</span>
        </div>
        <div className={styles.sectionButtons}>
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
        </div>
      </div>
      <div className={styles.header}>
        <span> {selectedDay} </span>
      </div>
      <div className={styles.content}>
        {calendar.map((item, index) => {
          if (item.day === selectedDay) {
            return (
              <div className={styles.item} key={index}>
                <div className={styles.time}>{item.time}</div>
                <div className={styles.detail}>
                  <span className={styles.title}>{item.title}</span>
                  <span className={styles.location}>
                    Teknokent - Hackerspace
                  </span>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Calendar;
