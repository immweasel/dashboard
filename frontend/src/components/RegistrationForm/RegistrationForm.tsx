import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import styles from "./RegistrationForm.module.css";

interface RegistrationFormData {
  username: string;
  tgUsername: string;
  password: string;
  trafficSource?: string;
}

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>();
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<RegistrationFormData> = async (data) => {
    try {
      const response = await axios.post('/api/register', data);
      console.log('Успешно зарегистрированы', response.data);
    } catch (err) {
      setError('Ошибка при регистрации');
    }
  };

  return (

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.registerContainer}>
          <h2 className={styles.title}>Регистрация</h2>
          <p className={styles.subtitle}>У вас уже есть аккаунт? <span className={styles.authButton}>Войти</span></p>
          {error && <p>{error}</p>}
        </div>

        <div className={styles.inputContainer}>
          <input
            className={`${styles.input} ${styles.inputUser}`}
            type="text"
            {...register('username', { required: true, minLength: 1, maxLength: 256 })}
            placeholder='Логин'
            autoComplete="off"
          />
          {errors.username && <p>Логин пользователя обязателен и должен быть не более 256 символов.</p>}
        </div>

        <div className={styles.inputContainer}>
          <input
            className={`${styles.input} ${styles.inputTg}`}
            type="text"
            {...register('tgUsername', { required: true, minLength: 1, maxLength: 256 })}
            placeholder='@username'
            autoComplete="off"
          />
          {errors.tgUsername && (
            <p>Юзернейм телеграмм аккаунта обязателен и должен быть не более 256 символов.</p>
          )}
        </div>

        <div className={styles.inputContainer}>
          <input
            className={`${styles.input} ${styles.inputParol}`}
            type="password"
            {...register('password', { required: true, minLength: 1, maxLength: 64 })}
            placeholder='Пароль'
            autoComplete="off"
          />
          {errors.password && <p>Пароль обязателен и должен быть не более 64 символов.</p>}
        </div>

        <div className={styles.inputContainer}>
          <input
            className={`${styles.input} ${styles.inputTrafic}`}
            type="text"
            {...register('trafficSource', { maxLength: 1024 })}
            placeholder='Источник трафика'
            autoComplete="off"
          />
          {errors.trafficSource && <p>Источник трафика должен быть не более 1024 символов.</p>}
        </div>

        <button className={styles.submitButton} type="submit">Стать партнером</button>

        {error && <p>{error}</p>}
      </form>
  );
};

export default RegistrationForm;
