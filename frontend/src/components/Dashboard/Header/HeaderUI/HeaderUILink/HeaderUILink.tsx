import { FC ,useState} from "react";
import styles from './HeaderUILink.module.css'
import CreateLinkModal from "../../../CreateLinkModal/CreateLinkModal";
import {ReactComponent as CreateLinkImg} from '../../../../../assets/images/createLink.svg'


const HeaderUILink:FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};


  return (
		<div>
			<button onClick={openModal} className={styles.createLinkBtn}>
				<CreateLinkImg className={styles.createLinkImg} />
				<p className={styles.createLinkText}>Создать ссылку</p>
			</button>
			<CreateLinkModal isOpen={isModalOpen} onClose={closeModal}/>
		</div>
	)
}


export default HeaderUILink