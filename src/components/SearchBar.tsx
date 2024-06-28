import styles from '../styles/searchBarStyle.module.css';
import searchIcon from '../assets/Default.svg';

export function SearchBar() {
  return (
    <div className={styles.container}>
      <label htmlFor='searchBar'>
        <input
          type='text'
          id='searchBar'
          name='searchBar'
          placeholder='Pesquisar'
        />
      </label>
      <button>
        <img src={searchIcon} alt='Search-Icon' />
      </button>
    </div>
  );
}
