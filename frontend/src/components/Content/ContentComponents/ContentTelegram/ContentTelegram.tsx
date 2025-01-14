import { FC } from 'react'
import styles from './ContentTelegram.module.css'
import tgLogo  from '../../../../assets/images/tgLogo.svg'

const ContentTelegram: FC = () => {
	const handleTelegramButton = (): void => {
		window.open('https://t.me/Lilmint11', '_blank')
	}


	return (
		<div className={styles.contentTelegramContainer}>
			<button onClick={handleTelegramButton} className={styles.contentTelegram}>
				<div className={styles.contentTelegramFilling}>
					<div className={styles.contentTelegramIcon}>
						<img alt='tgIcon' src={tgLogo} />
					</div>
					<div className={styles.contentTelegramText}>
						<p className={styles.contentTelegramTextTitle}>Telegram</p>
						<p className={styles.contentTelegramTextTag}>@tg_bot</p>
					</div>
				</div>
				<div className={styles.contentTelegramSpace}></div>
			</button>
		</div>
	)
}

export default ContentTelegram
