import styles from './Header.module.scss';
import cn from 'classnames';
import { Logo, UserMenu } from '../../components';

export const Header = ({ className, onClickShowCart, ...props }) => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <div className="container">
        <div className={styles.inner}>
          <Logo />
          <UserMenu onClickShowCart={onClickShowCart}></UserMenu>
        </div>
      </div>
    </header>
  );
};
