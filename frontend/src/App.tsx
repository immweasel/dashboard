import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from "./App.module.css"
import Content from './components/Content/Content';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import AuthForm from './components/AuthForm/AuthForm';
import DashBoard from './components/Dashboard/DashBoard';

const CombinedComponents: FC = () => {
  return (
    <div className={styles.combinedComponents}>
      <Content />
      <RegistrationForm />
    </div>
  );
}

const App:FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CombinedComponents/>} />
          <Route path="/signup" element={<RegistrationForm />} />
          <Route path="/signin" element={<AuthForm />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

