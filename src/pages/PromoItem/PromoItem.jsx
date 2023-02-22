import React, { useEffect } from 'react';
import Categories from '../../components/common/Categories/Categories';
import styles from './PromoItem.module.scss';
import AirJordan from '../../assets/img/AirJordan.png';
import AirJordan2 from '../../assets/img/AIR_JORDAN_XXXI_2.jpg';
import AirJordan3 from '../../assets/img/AIR_JORDAN_XXXI_3.jpg';
import AirJordan4 from '../../assets/img/AIR_JORDAN_XXXI_4.jpg';
import run from '../../assets/img/icons/run.png';
import shoes from '../../assets/img/icons/shoes.png';
import wind from '../../assets/img/icons/wind.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SwiperItem from '../../components/common/Swiper/Swiper';
import Timer from '../../components/common/Timer/Timer';

function PromoItem() {
   useEffect(() => {
      window.scrollTo(0, 0);
      Aos.init({ duration: 3000 });
   }, []);

   return (
      <div className={styles.wrapper}>
         <div className={styles.top}>
            <h2 className={styles.title}>AIR JORDAN XXXI lOW</h2>
            <div className={styles.top_content}>
            <div
                  data-aos="zoom-in-up"
                  className={styles.right}
               >
                  <img
                     src={AirJordan}
                     alt=""
                  />
               </div>
               <div
                  data-aos="fade-left"
                  className={styles.left}
               >
                  <p className={styles.text}>
                     <b> Легендарні </b> кросівки 
                     зі знижкою <b> 30% </b>
                  </p>
                  <div className={styles.price}>
                     <del>
                        <span className={styles.amount}>1850 грн</span>
                     </del>
                     <ins>
                        <span className={styles.amount2}>1300 <b>грн</b> </span>
                     </ins>
                  </div>
                  <button className={styles.button}>Замовити</button>
               </div>
               
            </div>
         </div>
         <Timer/>
         <div className={styles.description_wrapper}>
            <div
               data-aos="fade-up"
               data-aos-duration="1000"
               className={styles.description_item}
            >
               <div className={styles.description_icon}>
                  <img
                     src={run}
                     alt=""
                  />
               </div>
               <h3 className={styles.description_title}></h3>
               <p className={styles.description_text}>
                  «Дихаючий» матеріал верху допоможе позбутися пітливості ніг
               </p>
            </div>
            <div
               data-aos="fade-up"
               data-aos-duration="2000"
               className={styles.description_item}
            >
               <div className={styles.description_icon}>
                  <img
                     src={wind}
                     alt=""
                  />
               </div>
               <h3 className={styles.description_title}></h3>
               <p className={styles.description_text}>
                  «Дихаючий» матеріал верху допоможе позбутися пітливості ніг
               </p>
            </div>
            <div
               data-aos="fade-up"
               data-aos-duration="3000"
               className={styles.description_item}
            >
               <div className={styles.description_icon}>
                  <img
                     src={shoes}
                     alt=""
                  />
               </div>
               <h3 className={styles.description_title}></h3>
               <p className={styles.description_text}>
                  «Дихаючий» матеріал верху допоможе позбутися пітливості ніг
               </p>
            </div>
         </div>
         <SwiperItem />
         <div></div>
      </div>
   );
}

export default PromoItem;
