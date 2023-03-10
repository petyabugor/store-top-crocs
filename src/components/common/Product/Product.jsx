import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../../redux/slices/cartSlice';
import { setItemId } from '../../../redux/slices/filterSlice';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../../redux/slices/productSlice';

function Product({ title, price, id, imageUrl, sizes }) {
   const [activeSizes, setActiveSizes] = useState(0);
   const dispatch = useDispatch();
   const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
   const addedCount = cartItem ? cartItem.count : 0;

   const itemId = useSelector(state=> state.filters)
   

   const items = useSelector((state) => state.products.items);
   const thisProduct = items.find((prod) => prod.id === id);
   const onClickItemId = (index) => {
      dispatch(setItemId(index));
   };

   const getProductsDetail = async () => {
      const id = itemId;
      dispatch(
         fetchProducts({
            id
         }),
      );
   };

   const onClickAdd = () => {
      const item = {
         id,
         title,
         price,
         imageUrl,
         size: sizes[activeSizes],
      };
      dispatch(addItem(item));
   };
   return (
      <div className="product-block-wrapper">
         <div className="product-block">
            <div className="product-block__content">
               <div className="product-block__image">
                  <img
                     src={imageUrl}
                     alt="Crocs"
                  />
               </div>
              <Link to={`/products/${thisProduct.id}`}> <h4 onClick={() => onClickItemId (thisProduct.id)} className="product-block__title">{title}</h4></Link>
            </div>
            <div className="product-block__selector">
               <ul>
                  {sizes.map((value, i) => (
                     <li
                        key={value}
                        onClick={() => setActiveSizes(i)}
                        className={activeSizes === i ? 'active' : ''}
                     >
                        {value}
                     </li>
                  ))}
               </ul>
            </div>

            <div className="product-block__bottom">
               <div className="product-block__price">{price}</div>
               <button
                  onClick={onClickAdd}
                  className="button button--outline button--add"
               >
                  <svg
                     width="12"
                     height="12"
                     viewBox="0 0 12 12"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                     />
                  </svg>
                  <span>????????????????</span>
                  {addedCount > 0 && <i>{addedCount}</i>}
               </button>
            </div>
         </div>
      </div>
   );
}

export default Product;
