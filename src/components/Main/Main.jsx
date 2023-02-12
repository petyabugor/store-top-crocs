import React, { useContext, useEffect, useRef, useState } from 'react';
import { searchContext } from '../../App';
import Categories from '../common/Categories/Categories';
import Product from '../common/Product/Product';
import Skeleton from '../common/Product/skeleton';
import Sort, { list } from '../common/Sort/Sort';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setFilters } from '../../redux/slices/filterSlice';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

function Main() {
   const categoryId = useSelector((state) => state.filter.categoryId);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const sortType = useSelector((state) => state.filter.sort);
   const isMounted = useRef(false);
   const isSearch = useRef(false);

   const [products, setProducts] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const { searchValue } = useContext(searchContext);
   const category = categoryId > 0 ? `category=${categoryId}` : '';

   const onClickCategory = (index) => {
      dispatch(setCategoryId(index));
   };

   useEffect(() => {
      if (window.location.search) {
         const params = qs.parse(window.location.search.substring(1));
         const sort = list.find((obj) => obj.sortProperty === params.sortProperty);
         dispatch(setFilters({ ...params, sort }));
         isSearch.current = true;
      }
   }, []);

   useEffect(() => {
      setIsLoading(true);
      if (!isSearch.current) {
         axios
            .get(
               `https://63b2bd9f5901da0ab36c48c2.mockapi.io/items?${category}&sortby=${sortType.sortProperty}&order=asc`,
            )
            .then((res) => {
               setProducts(res.data);
               setIsLoading(false);
            });
      }
      isSearch.current = false;
      window.scrollTo(0, 0);
   }, [categoryId, sortType.sortProperty]);
   useEffect(() => {
      if (isMounted.current) {
         const queryString = qs.stringify({
            sortProperty: sortType.sortProperty,
            categoryId,
         });
         navigate(`?${queryString}`);
      }
      isMounted.current = true;
   }, [categoryId, sortType.sortProperty]);

   return (
      <div className="content">
         <div className="container">
            <div className="content__top">
               <Categories
                  value={categoryId}
                  onClickCategory={onClickCategory}
               />
               <Sort />
            </div>
            <h2 className="content__title">Всі товари</h2>
            <div className="content__items">
               {isLoading
                  ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
                  : products
                       .filter((obj) => {
                          if (obj.title.toLowerCase().includes(searchValue.toLowerCase()))
                             return true;
                          else {
                             return false;
                          }
                       })
                       .map((obj) => (
                          <Product
                             key={obj.id}
                             {...obj}
                          />
                       ))}
            </div>
         </div>
      </div>
   );
}

export default Main;
