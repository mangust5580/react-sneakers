import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { priceRu } from '../../helpers/helpers';
import { Button, Navigation } from '../index';
import styles from './UserMenu.module.scss';

export const UserMenu = ({ onClickShowCart }) => {
  const { cartProducts } = useContext(AppContext);
  const totalPrice = cartProducts.reduce((sum, obj) => obj.price + sum, 0);
  return (
    <div className={styles.userMenu}>
      <Button
        className={styles.btn}
        size="small"
        color="transparent"
        iconText="iconBefore"
        icon="cart"
        aria-label="Открыть корзину товаров"
        onClick={onClickShowCart}>
        {priceRu(totalPrice)}
      </Button>
      <Navigation className={styles.nav} />
    </div>
  );
};
