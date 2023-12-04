import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Payout.module.css'

interface PayoutPostI {
	amount: number
	requisites: number
	payoutMethod: string
}

interface PayoutGetI {
	info: {
		username: string
		id: number
		balance: number
		avatar: string
	}
}

const Payout: React.FC = () => {
	const [payoutData, setPayoutData] = useState<PayoutPostI>({
		amount: 0,
		requisites: 0,
		payoutMethod: '',
	})

	const [balance, setBalance] = useState<number>(0)

	useEffect(() => {
		async function fetchProfile() {
			try {
				const response = await axios.get<PayoutGetI>('/api/users/profile')
				const userBalance = response.data.info.balance
				setBalance(userBalance)
			} catch (error) {
				console.error('Ошибка при получении баланса:', error)
			}
		}

		fetchProfile()
	}, [])

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = event.target
		setPayoutData({ ...payoutData, [name]: value })
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		try {
			await axios.post('/api/users/createPayout', payoutData)
		} catch (error) {
			console.error('Ошибка при отправке данных:', error)
		}
	}

	return (
		<div className={styles.payout}>
			<div className={styles.payoutBalance}>
				<p className={styles.balanceUpper}>Баланс:</p>
				<p className={styles.balanceLower}>{balance}₽</p>
			</div>
			<form onSubmit={handleSubmit} className={styles.payoutForm}>
				<div className={styles.payoutElem}>
					<input
						className={styles.payoutInput}
						type='number'
						name='amount'
						value={payoutData.amount}
						onChange={handleInputChange}
					/>
				</div>

				<div className={styles.payoutElem}>
					<input
						className={styles.payoutInput}
						placeholder='Реквизиты'
						type='number'
						name='requisites'
						value={payoutData.requisites}
						onChange={handleInputChange}
					/>
				</div>

				<div className={styles.payoutElem}>
					<input
						className={styles.payoutInput}
						placeholder='Направление'
						type='text'
						name='payoutMethod'
						value={payoutData.payoutMethod}
						onChange={handleInputChange}
					/>
				</div>
				<button type='submit' className={styles.payoutSubmit}>
					Отправить
				</button>
			</form>
		</div>
	)
}

export default Payout
