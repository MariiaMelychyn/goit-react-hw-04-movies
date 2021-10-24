import Navigation from '../Navigation';
import styles from './Appbar.module.scss';

export default function AppBar() {
  return (
    <>
      <header className={styles.header}>
        <Navigation />
      </header>
      <hr />
    </>
  );
}