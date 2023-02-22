import React, { useEffect, useState } from 'react';
import styles from './Timer.module.scss';

const useCountdown = (deadline) => {
   // Time is in seconds
   const [time, setTime] = useState(
      Math.max(0, Math.floor((deadline.getTime() - Date.now()) / 1000)),
   );

   const decrement = () =>
      setTime((prevTime) => {
         return prevTime === 0 ? 0 : prevTime - 1;
      });

   useEffect(() => {
      const id = setInterval(decrement, 1000);
      return () => clearInterval(id);
   }, []);

   const format = (num) => {
      return num < 10 ? '0' + num : num.toString();
   };

   return {
      days: format(Math.floor(time / (3600 * 24))),
      hours: format(Math.floor((time / 3600) % 24)),
      minutes: format(Math.floor((time / 60) % 60)),
      seconds: format(time % 60),
   };
};

function Timer() {
   const hour = 3.6e6; // 1 Hour in milliseconds
   const numHours = 48; // Number of hours in the future
   const [deadline] = useState(new Date(Date.now() + numHours * hour));
   const time = useCountdown(deadline);

   return (
      <div className={styles.timer_box}>
         <div className={styles.timer}>
            <ul className={styles.flex}>
               <li className={styles.number}>{time.days}</li>
               <li className={styles.number}>{time.hours}</li>
               <li className={styles.number}>{time.minutes}</li>
               <li className={styles.number}>{time.seconds}</li>
            </ul>
         </div>
         <ul className={styles.flex}>
            <li className={styles.text}>день</li>
            <li className={styles.text}>годин</li>
            <li className={styles.text}>хвилин</li>
            <li className={styles.text}>секунд</li>
         </ul>
      </div>
   );
}

export default Timer;

{
   /* <div className={styles.timer_box}>
         <div className={styles.timer}>
            <div>День: {time.days}</div>
            <div>Годин: {time.hours}</div>
            <div>Minutes: {time.minutes}</div>
            <div>Seconds: {time.seconds}</div>
         </div>
      </div> */
}
