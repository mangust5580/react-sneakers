import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Button, Input } from '../index';
import styles from './Search.module.scss';

export const Search = ({ className, ...props }) => {
  const { searchValue, setSearchValue } = useContext(AppContext);

  const onChangeSearchInput = (evt) => {
    setSearchValue(evt.target.value);
  };
  return (
    <div className={styles.search}>
      <Input
        className={styles.input}
        type="search"
        placeholder="Поиск"
        value={searchValue}
        onChange={onChangeSearchInput}
      />
      {searchValue && (
        <Button
          className={styles.btnClear}
          size="small"
          color="ghost"
          icon="close"
          aria-label="Очистить поле поиска"
          onClick={() => setSearchValue('')}></Button>
      )}
    </div>
  );
};
