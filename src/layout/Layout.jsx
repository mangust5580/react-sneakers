import React from 'react';
import { AppContext, AppContextProvider } from '../context/AppContext';
import { Drawer, Header, Footer } from './index';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  const { cartVisible, setCartVisible } = React.useContext(AppContext);

  return (
    <div className={styles.wrapper}>
      <div>
        <Drawer
          className={styles.drawer}
          onClickCloseCart={() => setCartVisible(false)}
          visibled={cartVisible}
        />
      </div>
      <Header className={styles.header} onClickShowCart={() => setCartVisible(true)} />
      <main className={styles.content}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = (Component) => {
  return function withLayoutComponent(props) {
    return (
      <AppContextProvider>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
