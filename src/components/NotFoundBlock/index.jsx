import React from 'react';
import style from './NotFoundBlock.module.scss'

function NotFoundBlock() {
   return (
      <div>
         <h1 className={style.content} >Нічого не знайдено :( </h1>
      </div>
   );
}

export default NotFoundBlock;
