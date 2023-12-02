import React from 'react';
import Header from './Header/Header';
import styles from './DashBoard.module.css'

const DashBoard: React.FC = () => {
  return (
		<div className={styles.dashboard}>
			<div className={styles.dashboardContainer}>
				<Header />
			</div>
		</div>
	)
};

export default DashBoard;
