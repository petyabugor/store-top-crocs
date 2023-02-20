import './scss/app.scss';
import Header from './components/Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import { useState, createContext } from 'react';
import ProductDetail from './pages/ProductDetail';
import PromoItem from './pages/PromoItem/PromoItem';

export const searchContext = createContext();

function App() {
   const [searchValue, setSearchValue] = useState('');

   return (
      <div className="wrapper">
         <searchContext.Provider value={{ searchValue, setSearchValue }}>
            <Header></Header>
            <Routes>
               <Route
                  path="/"
                  element={<Home />}
               ></Route>
               <Route
                  path="/promo"
                  element={<PromoItem />}
               ></Route>
               <Route
                  path="/cart"
                  element={<Cart />}
               ></Route>
               <Route
                  path="/products/:productId"
                  element={<ProductDetail />}
               ></Route>
               <Route
                  path="*"
                  element={<NotFound />}
               ></Route>
            </Routes>
         </searchContext.Provider>
      </div>
   );
}

export default App;
