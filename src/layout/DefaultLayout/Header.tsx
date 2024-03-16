import styles from './Header.module.scss'
import logo from '../../img/LogoApp.png'
import { allFlags } from '../../img/Flag/flag'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'

function Header() {
    const [selectedLanguage, setSelectedLanguage] = useState<number>(0)

    return <div
        className={`shadow-sm d-flex align-items-center justify-content-between position-sticky ${styles.container}`}
        style={{
            top: '0'
        }}
    >
        <div className='ps-2'>
            <img alt='error' src={logo}></img>
        </div>
        <div className='pe-2 d-flex align-items-center'>
            <div className='d-flex align-items-center justify-content-center' style={{ height: '27px', width: '27px' }}>
                {allFlags[selectedLanguage].img}
            </div>
            <div className='ps-4'>
                <FontAwesomeIcon style={{ fontSize: '24px' }} icon={faBell}></FontAwesomeIcon>
            </div>
        </div>
    </div>
}

export default Header