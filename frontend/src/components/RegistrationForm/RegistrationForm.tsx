import React, { useState, useEffect, useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from "./RegistrationForm.module.css";
import PartnerComplete from '../PartnerComplete/PartnerComplete';
import inputUser from '../../assets/images/inputUser.svg';
import inputTg from '../../assets/images/inputTg.svg';
import inputParol from '../../assets/images/inputParol.svg';
import inputTrafic from '../../assets/images/inputTrafic.svg';


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
	const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit: SubmitHandler<RegistrationFormData> = async (data) => {
    try {
      const response = await axios.post('/api/signup', data);
      console.log('Успешно зарегистрированы', response.data);
			setIsModalOpen(false);
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
						<Link className={styles.authButton} to='/signin'>Войти</Link>
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
					<img className={`${styles.icon} ${styles.iconTg}`} src={inputTg} alt='иконка тг' />
					<input
						className={styles.input}
						type='text'
						{...register('tgUsername', {
							required: true,
							minLength: 1,
							maxLength: 256,
						})}
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
				}}>
					Стать партнером
				</button>

				{error && <p>{error}</p>}
				
			</form>
			<PartnerComplete isOpen={isModalOpen} onClose={closeModal} />
		</div>
	)
};

export default RegistrationForm;
