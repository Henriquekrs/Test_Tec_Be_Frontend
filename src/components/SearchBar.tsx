import styles from '../styles/searchBarStyle.module.css';
import searchIcon from '../assets/Default.svg';

export function SearchBar() {
  return (
    <div className={styles.container}>
      <h1>Funcionários</h1>
      <label htmlFor='searchBar'>
        <input type='text' name='searchBar' placeholder='Pesquisar' />
      </label>
      <button>
        <img src={searchIcon} alt='Search-Icon' />
      </button>
    </div>
  );
}
