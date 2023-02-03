import React from 'react';
import styles from './Search.module.scss';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { useContext } from 'react';
import { searchContext } from '../../../App';

function Search() {
   const { searchValue, setSearchValue }= useContext(searchContext)
   return (
      <div className={styles.root}>
         <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            className={styles.input}
            placeholder="Пошук..."
         />
         {searchValue ? (
            <AiOutlineClose onClick={()=> setSearchValue('')} className={styles.icon} />
         ) : (
            <AiOutlineSearch className={styles.icon} />
         )}
      </div>
   );
}

export default Search;
