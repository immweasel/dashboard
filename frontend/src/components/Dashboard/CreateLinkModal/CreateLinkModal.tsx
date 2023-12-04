import { FC, useState } from "react"
import styles from './CreateLinkModal.module.css'
import Link from "./Link/Link"
import Promo from "./Promo/Promo"
import {ReactComponent as CloseBtn} from '../../../assets/images/close.svg'

interface CreateLinkModalProps {
    isOpen: boolean,
    onClose: () => void,
}

const CreateLinkModal:FC<CreateLinkModalProps> = ({isOpen, onClose}) => {
	const [linkActive,setLinkActive] = useState<boolean>(true)
	const [promoActive,setPromoActive] = useState<boolean>(false)

	const promoHandler = ():void => {
		setLinkActive(false)
		setPromoActive(true)
	}

	const linkHandler = ():void => {
		setPromoActive(false)
		setLinkActive(true)
	}

    if(!isOpen) {
        return null
    }

  return (
		<div>
			<div className={styles.modalOverlay}>
				<div className={linkActive && promoActive === false ? styles.modalLink : styles.modalPromo}>
					<div className={styles.modalHeaderContainer}>
						<div className={styles.modalHeader}>
							<p className={styles.modalHeaderText}>Создать ссылку/промокод</p>
							<button className={styles.closeBtn} onClick={onClose}>
								<CloseBtn/>
							</button>
						</div>
					</div>

					<div className={styles.modalContent}>
						<div className={styles.modalContentUI}>
							<button onClick={linkHandler} className={linkActive ? styles.linkBtnActive : styles.linkBtn}>Создать ссылку</button>
							<button onClick={promoHandler} className={promoActive ? styles.promoBtnActive : styles.promoBtn}>Создать промокод</button>
						</div>

						{linkActive && promoActive === false ? <Link /> : <Promo />}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateLinkModal
