import { FC } from 'react'
import styles from './ContentIcons.module.css'
import userIcons from '../../../../assets/images/users.svg'

const ContentIcons:FC = () => {
	return <div className={styles.contentIcons}>
		<img alt='users' src={userIcons}/>
	</div>
}

export default ContentIcons
