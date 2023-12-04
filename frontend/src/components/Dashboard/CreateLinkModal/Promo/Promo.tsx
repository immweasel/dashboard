import React, { useState } from 'react'
import axios from 'axios'
import styles from './Promo.module.css'

interface CreatePromoI {
	promocode: string
	bonus: number
	comment: string | null
}

const Promo: React.FC = () => {
	const [formData, setFormData] = useState<CreatePromoI>({
		promocode: '',
		bonus: 0,
		comment: null,
	})

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		try {
			await axios.post('/api/users/createPromocode', formData)
		} catch (error) {
			console.error('Ошибка при отправке данных:', error)
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className={styles.promoForm}>
				<div className={styles.promoElem}>
					<label className={styles.promoLabel}>Промокод</label>
					<input
						className={styles.promoInput}
						placeholder='PROMO'
						type='text'
						name='promocode'
						value={formData.promocode}
						onChange={handleInputChange}
					/>
				</div>

				<div className={styles.promoElem}>
					<label className={styles.promoLabel}>Бонус</label>
					<input
						className={styles.promoInput}
						type='number'
						name='bonus'
						value={formData.bonus}
						onChange={handleInputChange}
					/>
					<p className={styles.promoText}>
						Бонус, который получит юзер при активации
					</p>
				</div>

				<div className={styles.promoElem}>
					<label className={styles.promoLabel}>Комментарий</label>
					<input
						className={styles.promoInput}
						placeholder='Трафик'
						type='text'
						name='comment'
						value={formData.comment || ''}
						onChange={handleInputChange}
					/>
					<p className={styles.promoText}>Напишите комментарий для себя</p>
				</div>
				<button type='submit' className={styles.promoSubmit}>
					Сохранить
				</button>
			</form>
		</div>
	)
}

export default Promo
