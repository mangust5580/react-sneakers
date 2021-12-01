import { Button, Htag } from '../index';
import styles from './Info.module.scss';

export const Info = ({ title, imageUrl, imageAlt, imageWidth, imageHeight, descr, onClick }) => {
  return (
    <div className={styles.info}>
      <div className={styles.inner}>
        <img
          className={styles.img}
          src={imageUrl}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
        />
        <Htag className={styles.title}>{title}</Htag>
        <p className={styles.descr}>{descr}</p>
        <Button className={styles.btn} iconText="iconBefore" icon="arrowLeft" onClick={onClick}>
          Вернуться назад
        </Button>
      </div>
    </div>
  );
};
