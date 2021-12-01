import cn from 'classnames';
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlinePlus,
  AiOutlineClose,
  AiOutlineCheck,
} from 'react-icons/ai';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { BiSearchAlt2 } from 'react-icons/bi';
import { GrCart } from 'react-icons/gr';
import styles from './Button.module.scss';

export const Button = ({
  children,
  className,
  size,
  color = 'primary',
  icon = 'none',
  iconText = 'none',
  ariaLabel = 'none',
  onClick,
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: color === 'primary',
        [styles.ghost]: color === 'ghost',
        [styles.danger]: color === 'danger',
        [styles.transparent]: color === 'transparent',
        [styles.small]: size === 'small',
        [styles.iconBefore]: iconText === 'iconBefore',
        [styles.iconAfter]: iconText === 'iconAfter',
      })}
      aria-label={ariaLabel}
      {...props}
      onClick={onClick}>
      {children}
      {icon !== 'none' && (
        <span>
          {icon === 'plus' && <AiOutlinePlus size={16} />}
          {icon === 'close' && <AiOutlineClose size={16} />}
          {icon === 'arrowLeft' && <AiOutlineArrowLeft size={16} />}
          {icon === 'arrowRight' && <AiOutlineArrowRight size={16} />}
          {icon === 'favoriteBorder' && <MdFavoriteBorder size={20} />}
          {icon === 'favoriteFill' && <MdFavorite size={20} />}
          {icon === 'check' && <AiOutlineCheck size={16} />}
          {icon === 'loupe' && <BiSearchAlt2 size={16} />}
          {icon === 'cart' && <GrCart size={16} />}
        </span>
      )}
    </button>
  );
};
