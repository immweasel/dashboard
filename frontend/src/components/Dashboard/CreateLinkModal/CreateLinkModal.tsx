import { FC } from "react"
import styles from './CreateLinkModal.module.css'

interface CreateLinkModalProps {
    isOpen: boolean,
    onClose: () => void,
}

const CreateLinkModal:FC<CreateLinkModalProps> = ({isOpen, onClose}) => {
    if(!isOpen) {
        return null
    }

  return (
		<div>
			<div className={styles.modalOverlay}>
				<div className={styles.modal}>
					<button className={styles.closeBtn} onClick={onClose}>
						X
					</button>
					<div className={styles.modalContent}>
                        Link Modal
                    </div>
				</div>
			</div>
		</div>
	)
}

export default CreateLinkModal
