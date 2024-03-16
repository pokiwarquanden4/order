import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Footer.module.scss'
import { faCartShopping, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return <div
        className={`position-sticky d-flex align-items-center justify-content-around ${styles.container}`}
        style={{
            bottom: '0'
        }}
    >
        <FontAwesomeIcon className={`${styles.icon}`} icon={faHouse}></FontAwesomeIcon>
        <FontAwesomeIcon className={`${styles.icon}`} icon={faCartShopping}></FontAwesomeIcon>
        <FontAwesomeIcon className={`${styles.icon}`} icon={faUser}></FontAwesomeIcon>
    </div>
}

export default Footer