import { FC } from 'react'
import styles from './CreatePayoutModal.module.css'
import Payout from './Payout/Payout'
import { ReactComponent as CloseBtn } from '../../../assets/images/close.svg'

interface CreatePayoutModalProps {
	isOpen: boolean
	onClose: () => void
}

const CreatePayoutModal: FC<CreatePayoutModalProps> = ({ isOpen, onClose }) => {

	if (!isOpen) {
		return null
	}

	return (
		<div>
			<div className={styles.modalOverlay}>
				<div className={styles.modal}>
					<div className={styles.modalHeaderContainer}>
						<div className={styles.modalHeader}>
							<p className={styles.modalHeaderText}>Заказать выплату</p>
							<button className={styles.closeBtn} onClick={onClose}>
								<CloseBtn />
							</button>
						</div>
					</div>

					<div className={styles.modalContent}>
                        <Payout />
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreatePayoutModal
