import LogoBe from '../assets/Fundo.svg';
import styles from '../styles/headerStyle.module.css';

export function Header() {
  return (
    <header className={styles.container}>
      <img src={LogoBe} alt='Logotipo Be' />
    </header>
  );
}
