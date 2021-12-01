import cn from 'classnames';
import { Button, CartProduct, Htag, Info } from '../../components';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { priceRu } from '../../helpers/helpers';
import { useContext, useState } from 'react';
import styles from './Drawer.module.scss';

export const Drawer = ({ className, onClickCloseCart, visibled, ...props }) => {
  const { cartProducts, setCartProducts } = useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const totalPrice = cartProducts.reduce((sum, obj) => obj.price + sum, 0);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://614211e74d16670017ba2bdf.mockapi.io/orders', {
        items: cartProducts,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartProducts([]);

      for (let i = 0; i < cartProducts.length; i++) {
        const item = cartProducts[i];
        await axios.delete(`https://614211e74d16670017ba2bdf.mockapi.io/cart/${item.id}`);
        await delay(1000);
      }
    } catch (error) {
      alert('Ошибка при создании заказа');
    }
    setIsLoading(false);
  };
  return (
    <div
      className={cn(className, styles.overflow, `${visibled ? styles.overlayVisible : ''}`)}
      {...props}>
      <div className={styles.drawer}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <Htag tag="h2">Корзина</Htag>
            <Button
              color="ghost"
              icon="close"
              size="small"
              aria-label="Закрыть корзину"
              onClick={onClickCloseCart}></Button>
          </div>
          {cartProducts.length > 0 ? (
            <>
              <ul className={styles.list}>
                {cartProducts.map((cartProduct) => {
                  return (
                    <li className={styles.item} key={cartProduct.id}>
                      <CartProduct
                        id={cartProduct.id}
                        title={cartProduct.title}
                        price={cartProduct.price}
                        imageUrl={cartProduct.imageUrl}
                        imageAlt={cartProduct.imageAlt}
                      />
                    </li>
                  );
                })}
              </ul>
              <div className={styles.footer}>
                <table className={styles.table}>
                  <tbody>
                    <tr>
                      <td>Итого:</td>
                      <td>
                        <span className={styles.price}>{priceRu(totalPrice)}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Налог 5%:</td>
                      <td>
                        <span className={styles.price}>
                          {priceRu(Math.round((totalPrice / 100) * 5))}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Button
                  className={styles.btnCheckout}
                  color="primary"
                  iconText="iconAfter"
                  icon="arrowRight"
                  onClick={onClickOrder}
                  disabled={isLoading}>
                  Оформить заказ
                </Button>
              </div>
            </>
          ) : (
            <Info
              title={isOrderComplete ? 'Заказ оформлен' : 'Корзина пустая'}
              imageUrl={
                isOrderComplete ? 'images/info/completeOrder.png' : 'images/info/emptyCart.png'
              }
              imageAlt={
                isOrderComplete ? 'Изображение успешной операции' : 'Изображение пустой коробки'
              }
              descr={
                isOrderComplete
                  ? `Ваш заказ ${orderId} скоро будет передан курьерской доставке`
                  : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
              }
              imageWidth={isOrderComplete ? 83 : 120}
              imageHeight={120}
              onClick={onClickCloseCart}
            />
          )}
        </div>
      </div>
    </div>
  );
};
