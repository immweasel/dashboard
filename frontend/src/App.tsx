import { FC, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from "./App.module.css"
import Content from './components/Content/Content';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import AuthForm from './components/AuthForm/AuthForm';
import DashBoard from './components/Dashboard/DashBoard';

const App:FC = () => {

  const [isRegistrationForm, setIsRegistrationForm] = useState(true);

  const toggleForm = () => {
    setIsRegistrationForm((prev) => !prev);
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element= {
              <div className={styles.combinedComponents}>
                <Content />
                {isRegistrationForm ? (
                  <RegistrationForm toggleForm={toggleForm} />
                ) : (
                  <AuthForm toggleForm={toggleForm} />
                )}
              </div> }
              />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

