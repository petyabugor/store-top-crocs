import React, { useContext, useEffect, useState } from 'react';
import { searchContext } from '../../App';
import Categories from '../common/Categories/Categories';
import Product from '../common/Product/Product';
import Skeleton from '../common/Product/skeleton';
import Sort from '../common/Sort/Sort';

function Main() {
   const [products, setProducts] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const [categoryId, setCategoryId] = useState(0);
   const [sortType, setSortType] = useState({ name: 'популярністю', sort: 'rating' });
   const { searchValue }= useContext(searchContext)
   const category = categoryId > 0 ? `category=${categoryId}` : '';

   useEffect(() => {
      setIsLoading(true);
      fetch(
         `https://63b2bd9f5901da0ab36c48c2.mockapi.io/items?${category}&sortby=${sortType.sort}&order=asc`,
      )
         .then((res) => res.json())
         .then((arr) => {
            setProducts(arr);
            setIsLoading(false);
         });
      window.scrollTo(0, 0);
   }, [categoryId, sortType]);
   
   return (
      <div className="content">
         <div className="container">
            <div className="content__top">
               <Categories
                  value={categoryId}
                  onClickCategory={(index) => setCategoryId(index)}
               />
               <Sort
                  value={sortType}
                  onChangeSort={(i) => setSortType(i)}
               />
            </div>
            <h2 className="content__title">Всі товари</h2>
            <div className="content__items">
               {isLoading
                  ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
                  : products
                  .filter((obj)=>{
                     if(obj.title.toLowerCase().includes(searchValue.toLowerCase()))
                     return true
                     else{
                        return false
                     }
                  })
                  .map((obj) => (
                       <Product
                          key={obj.id}
                          title={obj.title}
                          price={obj.price}
                          img={obj.imageUrl}
                          sizes={obj.sizes}
                       />
                    ))}
            </div>
         </div>
      </div>
   );
}

export default Main;
