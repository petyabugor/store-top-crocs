import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../../assets/img/empty-cart.png';

function CartEmpty() {
   return (
      <div className="content">
         <div className="container container--cart">
            <div className="cart cart--empty">
               <h2>Кошик порожній 😕</h2>
               <div className="cart cart--image">
                  <img
                     src={Cart}
                     alt="Empty cart"
                  />
               </div>

               <Link
                  to="/"
                  className="button button--black"
               >
                  <span>Повернутися назад</span>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default CartEmpty;
