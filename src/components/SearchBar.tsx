import { useState } from 'react';
import { useGlobalContext } from '../context/GlobalProvider';
import styles from '../styles/searchBarStyle.module.css';
import searchIcon from '../assets/Default.svg';

export function SearchBar() {
  const { searchEmployees } = useGlobalContext();
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    searchEmployees(newQuery);
  };

  return (
    <div className={styles.container}>
      <label htmlFor='searchBar'>
        <input
          type='text'
          id='searchBar'
          name='searchBar'
          placeholder='Pesquisar'
          value={query}
          onChange={handleInputChange}
        />
      </label>
      <button>
        <img src={searchIcon} alt='Search-Icon' />
      </button>
    </div>
  );
}
