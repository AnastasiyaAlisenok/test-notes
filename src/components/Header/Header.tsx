import List from '@mui/icons-material/List';
import styles from './Header.module.css';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.listNav}>
        <List className={styles.listIcon} />
        <span>Notes</span>
      </div>
    </header>
  );
};

export default Header;
