import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Link.module.css'

interface CreateLinkPostI {
	domain: string
	ref: string
	comment: string | null
	type: 'toSite' | 'toBot'
}

interface CreateLinkGetI {
	privateSettings: {
		domains: string[]
		payoutMethods: { name: string; title: string }[]
	}
}

const Link: React.FC = () => {
	const [domains, setDomains] = useState<string[]>([])
	const [formData, setFormData] = useState<CreateLinkPostI>({
		domain: '',
		ref: '',
		comment: null,
		type: 'toSite',
	})

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get<CreateLinkGetI>(
					'/api/users/settings'
				)
				const { domains } = response.data.privateSettings
				setDomains(domains)
			} catch (error) {
				console.error('Ошибка при получении данных:', error)
			}
		}

		fetchData()
	}, [])

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = event.target
		setFormData({ ...formData, [name]: value })
	}

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = event.target
		if (checked) {
			setFormData({ ...formData, type: name === 'toBot' ? 'toBot' : 'toSite' })
		}
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		try {
			await axios.post('/api/users/createLink', formData)
		} catch (error) {
			console.error('Ошибка при отправке данных:', error)
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className={styles.linkForm}>
				<div className={styles.linkElem}>
					<label className={styles.linkLabel}>Домен</label>
					<select
						className={styles.linkInput}
						name='domain'
						value={formData.domain}
						onChange={handleInputChange}
					>
						<option value=''>site.ru</option>
						{domains.map((domain, index) => (
							<option key={index} value={domain}>
								{domain}
							</option>
						))}
					</select>
				</div>

				<div className={styles.linkElem}>
					<label className={styles.linkLabel}>Рефка</label>
					<input
						placeholder='text'
						className={styles.linkInput}
						type='text'
						name='ref'
						value={formData.ref}
						onChange={handleInputChange}
					/>
					<p className={styles.linkText}>
						Этот текст будет отображаться после домена
					</p>
				</div>

				<div className={styles.linkElem}>
					<label className={styles.linkLabel}>Комментарий</label>
					<input
						placeholder='Трафик с таргета'
						className={styles.linkInput}
						type='text'
						name='comment'
						value={formData.comment || ''}
						onChange={handleInputChange}
					/>
					<p className={styles.linkText}>Напишите комментарий для себя</p>
				</div>

				<div className={styles.linkCheckboxes}>
					<label className={styles.checkboxText}>
						<input
							className={styles.linkCheckbox}
							type='checkbox'
							name='toSite'
							checked={formData.type === 'toSite'}
							onChange={handleCheckboxChange}
						/>
						Ссылка ведет на сайт
					</label>
					<label className={styles.checkboxText}>
						<input
							className={styles.linkCheckbox}
							type='checkbox'
							name='toBot'
							checked={formData.type === 'toBot'}
							onChange={handleCheckboxChange}
						/>
						Ссылка ведет на бота
					</label>
				</div>

				<button type='submit' className={styles.linkSubmit}>Сохранить</button>
			</form>
		</div>
	)
}

export default Link
