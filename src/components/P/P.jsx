import cn from 'classnames';
import styles from './P.module.scss';
export const P = ({ size = 'black', color = 'primary', children, className }) => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
        [styles.primary]: color === 'primary',
        [styles.black]: color === 'black',
        [styles.white]: color === 'white',
        [styles.secondary]: color === 'secondary',
        [styles.success]: color === 'success',
        [styles.danger]: color === 'danger',
      })}>
      {children}
    </p>
  );
};
