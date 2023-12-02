import { FC } from "react";
import HeaderUILink from "./HeaderUILink/HeaderUILink";
import HeaderUIOrder from "./HeaderUIOrder/HeaderUIOrder";
import HeaderUIStats from "./HeaderUIStats/HeaderUIStats";
import styles from './HeaderUI.module.css'


const HeaderUI:FC = () => {
  return (
		<div className={styles.headerUI}>
			<HeaderUIStats />
			<HeaderUILink />
			<HeaderUIOrder />
		</div>
	)
}

export default HeaderUI
