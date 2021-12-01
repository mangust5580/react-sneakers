import cn from 'classnames';
import styles from './Htag.module.scss';
export const Htag = ({ tag = 'h2', children, className }) => {
  switch (tag) {
    case 'h1':
      return <h1 className={cn(className, styles.h1)}>{children}</h1>;
    case 'h2':
      return <h2 className={cn(className, styles.h2)}>{children}</h2>;
    default:
      return <></>;
  }
};
