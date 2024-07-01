import { useEffect } from 'react';
import { Header } from '../components/Header';
import { TableMobile } from '../components/TableMobile';
import { useGlobalContext } from '../context/GlobalProvider';
import { useWindowSize } from '../hooks/useWindowSize'; // Import the custom hook
import styles from '../styles/homePageStyle.module.css';
import { TitlePage } from '../components/TitlePage';
import { TableDesktop } from '../components/TableDesktop';

export function HomePage() {
  const { getEmployees } = useGlobalContext();
  const { width } = useWindowSize();

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <TitlePage />
      {width < 768 ? <TableMobile /> : <TableDesktop />}
    </div>
  );
}
