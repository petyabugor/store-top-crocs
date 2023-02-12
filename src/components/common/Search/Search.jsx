import React from 'react';
import styles from './Search.module.scss';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { useContext } from 'react';
import { searchContext } from '../../../App';

function Search() {
   const { searchValue, setSearchValue } = useContext(searchContext);
   const inputRef = React.useRef();
   const onClickClear= ()=>{
      setSearchValue('')
      inputRef.current.focus()
   }
   return (
      <div className={styles.root}>
         <input
            ref={inputRef}
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            className={styles.input}
            placeholder="Пошук..."
         />
         {searchValue ? (
            <AiOutlineClose
               onClick={onClickClear}
               className={styles.icon}
            />
         ) : (
            <AiOutlineSearch className={styles.icon} />
         )}
      </div>
   );
}

export default Search;
