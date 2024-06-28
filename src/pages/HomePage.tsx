import { useEffect } from 'react';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { Table } from '../components/Table';
import { useGlobalContext } from '../context/GlobalProvider';
import styles from '../styles/homePageStyle.module.css';

export function HomePage() {
  const { getEmployees } = useGlobalContext();

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <SearchBar />
      <Table />
    </div>
  );
}
