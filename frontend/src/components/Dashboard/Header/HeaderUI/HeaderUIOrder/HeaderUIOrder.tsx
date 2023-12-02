import { FC } from 'react'
import styles from './HeaderUIOrder.module.css'
import {ReactComponent as CreateOrderImg} from '../../../../../assets/images/createOrder.svg'

const HeaderUIOrder: FC = () => {
	return (
		<div>
			<button className={styles.orderBtn}>
                <CreateOrderImg className={styles.orderImg}/>
				<p className={styles.orderText}>Заказать выплату</p>
			</button>
		</div>
	)
}

export default HeaderUIOrder
