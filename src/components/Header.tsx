import styles from '../styles/headerStyle.module.css';
import { LogoBe } from '../assets/LogoBe';

export function Header() {
  return (
    <header className={styles.container}>
      <LogoBe />
    </header>
  );
}
