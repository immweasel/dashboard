import React, { useState, useContext, useEffect, useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import styles from "./RegistrationForm.module.css";
import PartnerComplete from '../PartnerComplete/PartnerComplete';
import inputUser from '../../assets/images/inputUser.svg';
import inputTg from '../../assets/images/inputTg.svg';
import inputParol from '../../assets/images/inputParol.svg';
import inputTrafic from '../../assets/images/inputTrafic.svg';
import { Context } from '../../index';
import api from '../../utils/MainApi';


interface RegistrationFormData {
  username: string;
  tgUsername: string;
  password: string;
  trafficSource?: string;
}

const RegistrationForm: React.FC<{ toggleForm: () => void }> = ({ toggleForm }) => {

	const [login, setLogin] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const {store} = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>();

  const [error, setError] = useState<string | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit: SubmitHandler<RegistrationFormData> = async (data) => {
    try {
      // const response = await api.post('/api/auth/register', data);
			setIsModalOpen(true);
      // console.log('Успешно зарегистрированы', response.data);
    } catch (err) {
      setError('Ошибка при регистрации');
    }
  };

	const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

	useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

  }, [closeModal]);

  return (
		<div className={styles.formContainer}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.registerContainer}>
					<h2 className={styles.title}>Регистрация</h2>
					<p className={styles.subtitle}>
						У вас уже есть аккаунт?{' '}
						<button className={styles.authButton} onClick={() => toggleForm()} type='button'>Войти</button>
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
						onChange={e => setLogin(e.target.value)}
						value={login}
						placeholder='Логин'
					/>
					{errors.username && (
						<p className={styles.errorName}>
							Логин пользователя обязателен и должен быть не более 256 символов.
						</p>
					)}
				</div>

				<div className={styles.inputContainer}>
					<img className={`${styles.icon} ${styles.iconTg}`} src={inputTg} alt='иконка тг' />
					<input
						className={styles.input}
						type='text'
						{...register('tgUsername', {
							required: true,
							minLength: 1,
							maxLength: 256,
						})}
						onChange={e => setUsername(e.target.value)}
						value={username}
						placeholder='@username'
					/>
					{errors.tgUsername && (
						<p className={styles.errorName}>
							Юзернейм телеграмм аккаунта обязателен и должен быть не более 256
							символов.
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
						onChange={e => setPassword(e.target.value)}
						value={password}
						placeholder='Пароль'
					/>
					{errors.password && (
						<p className={styles.errorName}>Пароль обязателен и должен быть не более 64 символов.</p>
					)}
				</div>

				<div className={styles.inputContainer}>
					<img className={`${styles.icon} ${styles.iconTrafic}`} src={inputTrafic} alt='иконка трафика' />
					<input
						className={styles.input}
						type='text'
						{...register('trafficSource', { maxLength: 1024 })}
						placeholder='Источник трафика'
					/>
					{errors.trafficSource && (
						<p className={styles.errorName}>Источник трафика должен быть не более 1024 символов.</p>
					)}
				</div>

				<button className={styles.submitButton} 
				type='submit'
				onClick={(e) => {
					e.preventDefault();
					setIsModalOpen(true);
					store.registration(login, username, password);
				}}
				>
					Стать партнером
				</button>

				{error && <p>{error}</p>}
				
			</form>
			<PartnerComplete isOpen={isModalOpen} onClose={closeModal} />
		</div>
	)
};

export default RegistrationForm;
