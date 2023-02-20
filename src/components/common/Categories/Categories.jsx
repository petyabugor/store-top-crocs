import React from 'react';
import { Link } from 'react-router-dom';
function Categories({ value, onClickCategory }) {
   const categories = ['Всі', 'Чоловікам', 'Жінкам', 'Хлопчикам', 'Дівчаткам', 'Акційний'];

   return (
      <div className="categories">
         
         <ul>
            {categories.map((name, i) => (
               <li
                  key={i}
                  onClick={() => onClickCategory(i)}
                  className={value === i ? 'active' : ''}
               >
                  {name}
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Categories;
