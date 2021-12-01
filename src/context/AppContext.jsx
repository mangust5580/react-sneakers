import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [cartVisible, setCartVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const onAddToCart = async (obj) => {
    try {
      const findProduct = cartProducts.find((cartProdObj) => +cartProdObj.parentId === +obj.id);
      if (findProduct) {
        setCartProducts((prev) => prev.filter((cartProduct) => +cartProduct.parentId !== +obj.id));
        await axios.delete(`https://614211e74d16670017ba2bdf.mockapi.io/cart/${findProduct.id}`);
      } else {
        setCartProducts((prev) => [...prev, obj]);
        const { data } = await axios.post('https://614211e74d16670017ba2bdf.mockapi.io/cart', obj);
        setCartProducts((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            } else {
              return item;
            }
          }),
        );
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину');
      console.error(error);
    }
  };

  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find((favProdObj) => +favProdObj.id === +obj.id)) {
        await axios.delete(`https://614211e74d16670017ba2bdf.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((favoriteProduct) => +favoriteProduct.id !== +obj.id));
      } else {
        const { data } = await axios.post(
          'https://614211e74d16670017ba2bdf.mockapi.io/favorites',
          obj,
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное');
      console.error(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, productsResponse] = await Promise.all([
          axios.get('https://614211e74d16670017ba2bdf.mockapi.io/cart'),
          axios.get('https://614211e74d16670017ba2bdf.mockapi.io/favorites'),
          axios.get('https://614211e74d16670017ba2bdf.mockapi.io/products'),
        ]);

        setIsLoading(false);

        setCartProducts(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setProducts(productsResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных');
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const isProductAdded = (id) => {
    return cartProducts.some((obj) => +obj.parentId === +id);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        cartProducts,
        setCartProducts,
        searchValue,
        setSearchValue,
        favorites,
        setFavorites,
        onAddToCart,
        onAddToFavorites,
        isProductAdded,
        cartVisible,
        setCartVisible,
        isLoading,
        setIsLoading,
      }}>
      {children}
    </AppContext.Provider>
  );
};
