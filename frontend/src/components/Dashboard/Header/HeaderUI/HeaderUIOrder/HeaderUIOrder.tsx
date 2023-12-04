import { FC,useState } from 'react'
import styles from './HeaderUIOrder.module.css'
import CreatePayoutModal from '../../../CreatePayoutModal/CreatePayoutModaL'
import {ReactComponent as CreateOrderImg} from '../../../../../assets/images/createOrder.svg'

const HeaderUIOrder: FC = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div>
			<button className={styles.orderBtn} onClick={openModal}>
				<CreateOrderImg className={styles.orderImg} />
				<p className={styles.orderText}>Заказать выплату</p>
			</button>
			<CreatePayoutModal isOpen={isModalOpen} onClose={closeModal} />
		</div>
	)
}

export default HeaderUIOrder
