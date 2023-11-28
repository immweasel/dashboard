import { FC } from 'react';
import styles from "./App.module.css"
import Content from './components/Content/Content';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

const App:FC = () => {
  return (
    <div className={styles.App}>
      <Content />
      <RegistrationForm />
    </div>
  );
}

export default App

