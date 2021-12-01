import styles from './Favorites.module.scss';
import { Htag, ProductCard } from '../../components';
import { AppContext } from '../../context/AppContext';
import { useContext } from 'react';

export const Favorites = () => {
  const { favorites, onAddToCart, onAddToFavorites } = useContext(AppContext);
  const { isLoading } = useContext(AppContext);
  return (
    <section className={styles.favorites}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.header}>
            <Htag>Избранные товары</Htag>
          </div>
          <ul className={styles.list}>
            {(isLoading ? [...Array(8)] : favorites).map((favorite, index) => {
              return (
                <li className={styles.item} key={isLoading ? index : favorite.id}>
                  <ProductCard
                    favorited
                    loading={isLoading}
                    onClickAddToCart={(obj) => onAddToCart(obj)}
                    onClickAddToFavorite={(obj) => onAddToFavorites(obj)}
                    {...favorite}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
