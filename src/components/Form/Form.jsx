import React from 'react';
import './Form.css';

function Form() {
   return (
      <div className="login-wrapper">
         <div className="login-box">
            <h2>ЗАЛИШІТЬ ЗАЯВКУ</h2>
            <p>та отримайте консультацію</p>
            <form>
               <div className="user-box">
                  
                  <input
                     type="text"
                     name=""
                     required=""
                     placeholder="Ваше ім'я"
                  />
               </div>
               <div className="user-box">
                  <input
                     type="password"
                     name=""
                     required=""
                     placeholder="Контактний телефон"
                  />
               </div>
               <a>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Оформити замовлення
               </a>
            </form>
         </div>
      </div>
   );
}

export default Form;
