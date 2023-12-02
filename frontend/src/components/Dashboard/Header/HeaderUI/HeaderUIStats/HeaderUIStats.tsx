import { FC } from 'react'
import styles from './HeaderUIStats.module.css'
import {ReactComponent as StatsImg} from '../../../../../assets/images/grid-alt.svg'

const HeaderUIStats: FC = () => {
	return <div>
        <button className={styles.statsBtn}>
            <StatsImg className={styles.statsImg}/>
            <p className={styles.statsText}>Статистика</p>
        </button>
    </div>
}

export default HeaderUIStats
