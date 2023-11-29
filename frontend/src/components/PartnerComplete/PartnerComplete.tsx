import React from 'react';
import styles from './PartnerComplete.module.css';

interface PartnerCompleteProps {
  isOpen: boolean;
  onClose: () => void;
}

const PartnerComplete: React.FC<PartnerCompleteProps> = ({ isOpen, onClose }) => {

  const handleButtonClick = () => {
    window.open('https://t.me/soundfieldgirl', '_blank');
    onClose();
  };

  return (
    <>
      {isOpen && (
        <>
          <div className={styles.overlay}></div>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h1 className={styles.title}>Ваша заявка успешно принята</h1>
              <div className={styles.line}></div>
              <p className={styles.subtitle}>Запустите телеграм бота, чтобы завершить регистрацию.
В бота будут приходить уведомления об активации аккаунта, выплатах и новости сервиса</p>
              <button className={styles.closeButton} onClick={handleButtonClick}>
                Открыть бота
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PartnerComplete;