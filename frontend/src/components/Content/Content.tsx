import { FC } from 'react'
import styles from './Content.module.css'
import ContentIcons from './ContentComponents/ContentIcons'
import ContentText from './ContentComponents/ContentText';
import ContentWidgets from './ContentComponents/ContentWidgets';
import ContentTelegram from './ContentComponents/ContentTelegram';

const Content:FC = () => {
	return (
		<div className={styles.Content}>
			<ContentIcons />
			<ContentText />
			<ContentWidgets />
			<ContentTelegram />
		</div>
	)
}

export default Content
