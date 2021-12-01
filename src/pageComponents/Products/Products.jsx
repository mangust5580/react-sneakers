import { useContext } from 'react';
import { Htag, Search, ProductCard } from '../../components';
import { AppContext } from '../../context/AppContext';
import styles from './Products.module.scss';

export const Products = () => {
  const { products, searchValue, onAddToCart, onAddToFavorites, isLoading } =
    useContext(AppContext);

  const renderProducts = () => {
    const filtredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filtredProducts).map((product, index) => (
      <li className={styles.item} key={isLoading ? index : product.id}>
        <ProductCard
          loading={isLoading}
          onClickAddToCart={(obj) => onAddToCart(obj)}
          onClickAddToFavorite={(obj) => onAddToFavorites(obj)}
          {...product}
        />
      </li>
    ));
  };

  return (
    <section className={styles.products}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.header}>
            <Htag>Каталог продуктов</Htag>
            <Search />
          </div>
          <ul className={styles.list}>{renderProducts()}</ul>
        </div>
      </div>
    </section>
  );
};
