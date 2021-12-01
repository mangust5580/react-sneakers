import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { MdFavoriteBorder } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            className={styles.link}
            to={process.env.PUBLIC_URL + 'favorites'}
            aria-label="Перейти на страницу избранных товаров">
            <MdFavoriteBorder size={20} />
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            className={styles.link}
            to={process.env.PUBLIC_URL + 'orders'}
            aria-label="Перейти на страницу оформленных товаров">
            <BiUserCircle size={20} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
