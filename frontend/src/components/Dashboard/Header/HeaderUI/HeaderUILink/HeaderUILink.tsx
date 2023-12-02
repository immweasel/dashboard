import { FC } from "react";
import styles from './HeaderUILink.module.css'
import {ReactComponent as CreateLinkImg} from '../../../../../assets/images/createLink.svg'


const HeaderUILink:FC = () => {
  return (
		<div>
			<button className={styles.createLinkBtn}>
				<CreateLinkImg className={styles.createLinkImg} />
				<p className={styles.createLinkText}>Создать ссылку</p>
			</button>
		</div>
	)
}


export default HeaderUILink