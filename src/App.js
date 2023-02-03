import './scss/app.scss';
import Header from './components/Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import { useState, createContext } from 'react';

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
                  path="/cart"
                  element={<Cart />}
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
