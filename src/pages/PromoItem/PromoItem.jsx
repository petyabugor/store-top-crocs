import React, { useEffect } from 'react';
import Categories from '../../components/common/Categories/Categories';
import styles from './PromoItem.module.scss';
import size from '../../assets/img/size.png';
import AirJordan1 from '../../assets/img/AirJordan1.jpeg';

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
               {/* <div
                  data-aos="zoom-in-up"
                  className={styles.right}
               >
                  <img
                     src={AirJordan1}
                     alt=""
                  />
               </div> */}
               <SwiperItem />
               <div
                  data-aos="fade-up"
                  className={styles.left}
               >
                  <p className={styles.text}>
                     <b> Легендарні </b> кросівки зі знижкою <b> 30% </b>
                  </p>
                  <div className={styles.price}>
                     <del>
                        <span className={styles.amount}>1850 грн</span>
                     </del>
                     <ins>
                        <span className={styles.amount2}>
                           1300 <b>грн</b>{' '}
                        </span>
                     </ins>
                  </div>
                  <button className={styles.button}>Замовити</button>
               </div>
            </div>
         </div>
         <Timer />
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
         <div className={styles.feature}>
            <h4 className={styles.feature_title1}>Характеристики</h4>
            <div className={styles.feature_content}>
               <div className={styles.feature_left}>
                  <p className={styles.feature_title}>Виробник</p>
                  <p className={styles.feature_title}>Бренд</p>
                  <p className={styles.feature_title}>Матеріал</p>
                  <p className={styles.feature_title}>Тип підошви</p>
                  <p className={styles.feature_title}>Розміри</p>
               </div>
               <div className={styles.feature_right}>
                  <p className={styles.feature_text}>Китай</p>
                  <p className={styles.feature_text}>Gukker</p>
                  <p className={styles.feature_text}>Текстиль ,Силікон ,Шкіра</p>
                  <p className={styles.feature_text}>Платформа</p>
                  <p className={styles.feature_text}>36-39</p>
               </div>
            </div>
         </div>
         <div></div>
         <div className={styles.size}>
            <h5 className={styles.size_title}>Як правильно визначити розмір</h5>
            <p className={styles.size_text}>
               Найточнійший спосіб визначити розмір - по довжині стопи. <br />
               Поставте ногу на листок А4 стоячи, зробіть олівцем чи ручкою відмітки у найдовшого
               пальця та у п'ятки. Виміряйте відстань між цими точками, будьте уважні - вимірювати
               відстань слід паралельно аркушу паперу, НЕ ПО ДІАГОНАЛІ.
            </p>
            <div className={styles.size_image}>
               <img
                  src={size}
                  alt="Розмір"
               />
            </div>
         </div>
      </div>
   );
}

export default PromoItem;
