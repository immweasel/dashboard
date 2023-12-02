import { FC, useState, useEffect } from "react";
import axios from "axios";
import { UserI } from "../../../../Interfaces";
import styles from './HeaderUser.module.css';
import alarm from "../../../../assets/images/alarm.svg";
import chevronDown from "../../../../assets/images/chevronDown.svg";


const HeaderUser:FC = () => {  
  const [user, setUser] = useState<UserI | null>(null)

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/api/users/profile')
          const data: UserI = response.data.info
          setUser(data)
        } catch (error) {
          console.error('Error fetching user profile:', error)
        }
      }

      fetchData()
  }, [])

  return (
		<div className={styles.headerUser}>
			<div>
				<img src={alarm} alt='alarm' />
			</div>

			<div>
				{user ? (
					<div>
            <div>
              <p>{user.username}</p>
              <p>ID: {user.id}</p>
            </div>
						<div>
							<img src={user.avatar} alt='User Avatar' />
						</div>
					</div>
				) : (
					<p>Loading...</p>
				)}
			</div>

			<div>
				<img src={chevronDown} alt='chevronDown' />
			</div>
		</div>
	)
}

export default HeaderUser