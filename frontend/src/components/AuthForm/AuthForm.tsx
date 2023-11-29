import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from "./AuthForm.module.css";
import PartnerComplete from '../PartnerComplete/PartnerComplete';
import inputUser from '../../assets/images/inputUser.svg';
import inputParol from '../../assets/images/inputParol.svg';


interface AuthFormData {
  username: string;
  password: string;
}

const AuthForm: React.FC = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>();

  const [error, setError] = useState<string | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit: SubmitHandler<AuthFormData> = async (data) => {
    try {
      const response = await axios.post('/api/signin', data);
      console.log('Успешная авторизация', response.data);
			navigate('/dashboard');
    } catch (err) {
      setError('Ошибка при авторизации');
    }
  };

	const closeModal = () => {
		setIsModalOpen(false);
	};

  return (
		<div className={styles.formContainer}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.registerContainer}>
					<h2 className={styles.title}>Вход</h2>
					<p className={styles.subtitle}>
						У вас нет аккаунта?{' '}
						<Link className={styles.authButton} to='/signup'>Зарегистрироваться</Link>
					</p>
					{error && <p>{error}</p>}
				</div>

				<div className={styles.inputContainer}>
					<img className={`${styles.icon} ${styles.iconUser}`} src={inputUser} alt='иконка юзера' />
					<input
						className={styles.input}
						type='text'
						{...register('username', {
							required: true,
							minLength: 1,
							maxLength: 256,
						})}
						placeholder='Логин'
					/>
					{errors.username && (
						<p className={styles.errorName}>
							Логин пользователя обязателен и должен быть не более 256 символов.
						</p>
					)}
				</div>

				<div className={styles.inputContainer}>
					<img className={`${styles.icon} ${styles.iconParol}`} src={inputParol} alt='иконка пароля' />
					<input
						className={styles.input}
						type='password'
						{...register('password', {
							required: true,
							minLength: 1,
							maxLength: 64,
						})}
						placeholder='Пароль'
					/>
					{errors.password && (
						<p className={styles.errorName}>Пароль обязателен и должен быть не более 64 символов.</p>
					)}
				</div>

				<button className={styles.submitButton} 
				type='submit'
				onClick={(e) => {
					e.preventDefault();
          navigate('/dashboard');
				}}>
					Войти
				</button>

				{error && <p>{error}</p>}
				
			</form>
			<PartnerComplete isOpen={isModalOpen} onClose={closeModal} />
		</div>
	)
};

export default AuthForm;
