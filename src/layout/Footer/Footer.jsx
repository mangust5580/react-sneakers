import styles from './Footer.module.scss';
import cn from 'classnames';

export const Footer = ({ className, ...props }) => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.developer}>
            <span>Разработчик:</span>
            <strong>Алексей Муратов</strong>
          </div>
          <div className={styles.design}>
            <span>Дизайн:</span>
            <strong>Артем Арчаков</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};
