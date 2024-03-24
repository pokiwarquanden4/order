import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Footer.module.scss'
import { faCartShopping, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from '../../pages'

function Footer() {
    const location = useLocation()
    const nav = useNavigate()

    return <div
        className={`z-1 position-sticky d-flex align-items-center justify-content-around ${styles.container}`}
        style={{
            bottom: '0',
            backgroundColor: '#fff'
        }}
    >
        <FontAwesomeIcon className={`${styles.icon} ${location.pathname === routes.home ? styles.icon_focus : undefined}`} icon={faHouse}
            onClick={() => {
                nav(routes.home)
            }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon className={`${styles.icon} ${location.pathname === routes.cart ? styles.icon_focus : undefined}`} icon={faCartShopping}
            onClick={() => {
                nav(routes.cart)
            }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon className={`${styles.icon} ${location.pathname === routes.account ? styles.icon_focus : undefined}`} icon={faUser}
            onClick={() => {
                nav(routes.account)
            }}
        ></FontAwesomeIcon>
    </div>
}

export default Footer