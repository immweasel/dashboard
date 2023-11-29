import { FC } from 'react'
import styles from './ContentWidgets.module.css'
import onlineWidget from '../../../../assets/images/onlineWidget.svg'
import moneyWidget from '../../../../assets/images/moneyWidget.svg'
import lineWidget from '../../../../assets/images/lineWidget.svg'

const ContentWidgets: FC = () => {
	return (
		<div className={styles.widget}>
			<div className={styles.firstLineWidgets}>
				<div className={styles.widgetRevShareContainer}>
					<div className={styles.widgetRevShare}>
						<p className={styles.widgetRevShareUpperText}>RevShare</p>
						<p className={styles.widgetRevShareLowerText}>До 85%</p>
					</div>
				</div>
				<div className={styles.widgetPaymentsContainer}>
					<div className={styles.widgetPayments}>
						<p className={styles.widgetPaymentsUpperText}>Выплаты</p>
						<p className={styles.widgetPaymentsMiddleText}>
							Каждый день на карты
						</p>
						<p className={styles.widgetPaymentsLowerText}>
							Моментально на USDT
						</p>
					</div>
				</div>
			</div>
			<div className={styles.widgetStats}>
				<div className={styles.widgetStatsText}>
					<p className={styles.widgetStatsUnderText}>Вся статистика</p>
					<p className={styles.widgetStatsUnderText}>в реальном</p>
					<p className={styles.widgetStatsUnderText}>времени</p>
				</div>
				<img
					className={styles.widgetStatsLineImg}
					src={lineWidget}
					alt='lineWidget'
				/>
				<div className={styles.widgetStatsImgs}>
					<img
						className={styles.widgetStatsMoneyImg}
						src={moneyWidget}
						alt='moneyWidget'
					/>
					<img src={onlineWidget} alt='onlineWidget' />
				</div>
			</div>
		</div>
	)
}

export default ContentWidgets
