import { useContext } from 'react';
import axios from 'axios';
import { priceRu } from '../../helpers/helpers';
import { Button } from '../../components';
import { AppContext } from '../../context/AppContext';
import styles from './CartProduct.module.scss';

export const CartProduct = ({ id, title, price, imageUrl, imageAlt }) => {
  const { setCartProducts } = useContext(AppContext);

  const onRemoveCartProduct = (id) => {
    try {
      axios.delete(`https://614211e74d16670017ba2bdf.mockapi.io/cart/${id}`);
      setCartProducts((prev) => prev.filter((product) => +product.id !== +id));
    } catch (error) {
      alert('Ошибка при удалении из корзины');
      console.error(error);
    }
  };

  return (
    <div className={styles.cartProduct}>
      <img
        className={styles.img}
        src={`images/products/${imageUrl}`}
        // width={200}
        // height={42}
        alt={imageAlt}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.price}>{priceRu(price)}</span>
      </div>
      <Button
        color="ghost"
        icon="close"
        size="small"
        aria-label="Удалить данный товар из корзины"
        onClick={() => onRemoveCartProduct(id)}></Button>
    </div>
  );
};
