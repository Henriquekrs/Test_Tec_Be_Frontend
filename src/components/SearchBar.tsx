import { useState } from 'react';
import { useGlobalContext } from '../context/GlobalProvider';
import styles from '../styles/searchBarStyle.module.css';
import { SearchIcon } from '../assets/SearchIcon';

export function SearchBar() {
  const { filterEmployees } = useGlobalContext();
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    filterEmployees(newQuery);
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
        <SearchIcon />
      </button>
    </div>
  );
}
