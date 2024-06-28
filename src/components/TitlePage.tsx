import styles from '../styles/titlePage.module.css';
import { SearchBar } from './SearchBar';

export function TitlePage() {
  return (
    <div className={styles.container}>
      <h1>Funcionários</h1>
      <SearchBar />
    </div>
  );
}
