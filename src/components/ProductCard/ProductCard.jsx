import { Button } from '../index';
import { priceRu } from '../../helpers/helpers';
import styles from './ProductCard.module.scss';
import { AppContext } from '../../context/AppContext';
import ContentLoader from 'react-content-loader';
import { useContext, useState } from 'react';

export const ProductCard = ({
  id,
  title,
  price,
  imageUrl,
  imageAlt,
  onClickAddToCart,
  onClickAddToFavorite,
  favorited = false,
  loading = false,
}) => {
  const [isFavorite, setIsFavorite] = useState(favorited);

  const { isProductAdded } = useContext(AppContext);

  const addToCartHandler = () => {
    onClickAddToCart({ id, parentId: id, title, price, imageUrl, imageAlt });
  };

  const addToFavoriteHandler = () => {
    onClickAddToFavorite({ id, title, price, imageUrl, imageAlt });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.productCard}>
      {loading ? (
        <ContentLoader
          speed={3}
          width={200}
          height={400}
          viewBox="0 0 200 400"
          backgroundColor="#eaeaea"
          foregroundColor="#d9d9d9">
          <rect x="0" y="414" rx="0" ry="0" width="200" height="23" />
          <rect x="0" y="0" rx="8" ry="8" width="200" height="200" />
          <rect x="0" y="240" rx="8" ry="8" width="200" height="20" />
          <rect x="0" y="270" rx="8" ry="8" width="160" height="20" />
          <rect x="0" y="340" rx="8" ry="8" width="70" height="20" />
          <rect x="0" y="370" rx="8" ry="8" width="120" height="20" />
          <rect x="160" y="350" rx="7" ry="7" width="38" height="38" />
        </ContentLoader>
      ) : (
        <>
          {onClickAddToFavorite && (
            <Button
              className={styles.favBtn}
              size="small"
              color={isFavorite ? 'danger' : 'ghost'}
              icon={isFavorite ? 'favoriteFill' : 'favoriteBorder'}
              ariaLabel="Убрать товар из избранных"
              onClick={addToFavoriteHandler}></Button>
          )}
          <img
            className={styles.image}
            src={`images/products/${imageUrl}`}
            alt={imageAlt}
            width={200}
            height={142}
          />
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.footer}>
            <div className={styles.priceBlock}>
              <span className={styles.priceText}>Цена:</span>
              <span className={styles.price}>{priceRu(price)}</span>
            </div>
            {onClickAddToCart && (
              <Button
                size="small"
                color={isProductAdded(id) ? 'primary' : 'ghost'}
                aria-label={
                  isProductAdded(id) ? 'Убрать товар из корзины' : 'Добавить товар в корзину'
                }
                icon={isProductAdded(id) ? 'check' : 'plus'}
                onClick={addToCartHandler}></Button>
            )}
          </div>
        </>
      )}
    </div>
  );
};
