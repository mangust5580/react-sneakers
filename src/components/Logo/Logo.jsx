import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <Link className={styles.logo} aria-label="Перейти на главную страницу" to="">
      <img src="images/logo.png" alt="" width="245" height="41" />
    </Link>
  );
};
