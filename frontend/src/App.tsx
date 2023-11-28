import { FC } from 'react';
import styles from "./App.module.css"
import Content from './components/Content/Content';

const App:FC = () => {
  return (
    <div className={styles.App}>
      <Content />
    </div>
  );
}

export default App

