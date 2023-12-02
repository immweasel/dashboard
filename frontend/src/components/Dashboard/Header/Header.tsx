import { FC } from 'react';
import HeaderUI from './HeaderUI/HeaderUI';
import HeaderUser from './HeaderUser/HeaderUser';
import styles from './Header.module.css'


const Header:FC = () => {
  return (
    <div className={styles.header}>
      <HeaderUI />
      <HeaderUser />
    </div>
  );
}

export default Header
