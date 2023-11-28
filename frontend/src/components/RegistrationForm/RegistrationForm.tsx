import React, { useState } from 'react';
import { useForm, SubmitHandler, UseFormRegister } from 'react-hook-form';
import axios from 'axios';
import styles from "./RegistrationForm.module.css"

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
    <div>
      <h2 className={styles.title}>Регистрация</h2>
      <p className={styles.subtitle} style={{ fontSize: '0.8em' }}>У вас уже есть аккаунт?</p>
      {error && <p>{error}</p>}

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            {...register('username', { required: true, minLength: 1, maxLength: 256 })}
            placeholder='Логин'
          />
          {errors.username && <p>Логин пользователя обязателен и должен быть не более 256 символов.</p>}
        </div>

        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            {...register('tgUsername', { required: true, minLength: 1, maxLength: 256 })}
            placeholder='@username'
          />
          {errors.tgUsername && (
            <p>Юзернейм телеграмм аккаунта обязателен и должен быть не более 256 символов.</p>
          )}
        </div>

        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="password"
            {...register('password', { required: true, minLength: 1, maxLength: 64 })}
            placeholder='Пароль'
          />
          {errors.password && <p>Пароль обязателен и должен быть не более 64 символов.</p>}
        </div>

        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            {...register('trafficSource', { maxLength: 1024 })}
            placeholder='Источник трафика'
          />
          {errors.trafficSource && <p>Источник трафика должен быть не более 1024 символов.</p>}
        </div>

        <button type="submit">Стать партнером</button>

        {error && <p>{error}</p>}
      </form>

    </div>
  );
};

export default RegistrationForm;
