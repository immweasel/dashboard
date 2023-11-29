import { FC } from 'react'
import styles from './Content.module.css'
import ContentIcons from './ContentComponents/ContentIcons/ContentIcons'
import ContentText from './ContentComponents/ContentText/ContentText';
import ContentWidgets from './ContentComponents/ContentWidgets/ContentWidgets';
import ContentTelegram from './ContentComponents/ContentTelegram/ContentTelegram';
import contentGrid from '../../assets/images/bgGrid.svg'

const Content:FC = () => {
	return (
		<div className={styles.content}>
			<img className={styles.contentGrid} src={contentGrid} alt=''/>
			<ContentIcons />
			<ContentText />
			<ContentWidgets />
			<ContentTelegram />
		</div>
	)
}

export default Content
