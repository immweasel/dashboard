import { FC } from 'react'
import styles from './ContentText.module.css'

const ContentText: FC = () => {
	return (
		<div className={styles.contentText}>
			<p className={styles.earnNow}>Начни зарабатывать</p>
			<p className={styles.earnNow}>Прямо сейчас</p>
			<p className={styles.mobileUnderText}>
				После регистрации с вами свяжется менеджер - ответит на все вопросы и
				поможет с запуском!
			</p>
			<p className={styles.firstUnderText}>
				После регистрации с вами свяжется менеджер - ответит на все
			</p>
			<p className={styles.secondUnderText}>вопросы и поможет с запуском!</p>
		</div>
	)
}

export default ContentText
