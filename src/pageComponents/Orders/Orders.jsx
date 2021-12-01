import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Htag, ProductCard } from '../../components';
import { AppContext } from '../../context/AppContext';
import styles from './Orders.module.scss';

export const Orders = () => {
  const { isLoading, setIsLoading } = useContext(AppContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('https://614211e74d16670017ba2bdf.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказов');
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className={styles.orders}>
      <div className="container">
        <div className={styles.inner}>
          <>
            <div className={styles.header}>
              <Htag>Мои покупки</Htag>
            </div>
            <ul className={styles.list}>
              {(isLoading ? [...Array(8)] : orders).map((order, index) => {
                return (
                  <li className={styles.item} key={isLoading ? index : order.id + index}>
                    <ProductCard loading={isLoading} {...order} />
                  </li>
                );
              })}
            </ul>
          </>
        </div>
      </div>
    </section>
  );
};
