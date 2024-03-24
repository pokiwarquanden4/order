import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './Notify.module.scss'
import { faBowlFood, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

function Notify() {
    const [openDetails, setOpenDetails] = useState<boolean>(false)

    return <div className="my-1">
        <div
            onClick={() => {
                setOpenDetails(!openDetails)
            }}
            className="rounded border ps-3 pe-4 py-2 d-flex align-items-center justify-content-between">
            <div className='d-flex align-items-center'>
                <FontAwesomeIcon
                    style={{
                        fontSize: '35px'
                    }}
                    className={`${styles.notify_icon} me-3`} icon={faBowlFood}></FontAwesomeIcon>
                <div className='w-100'>
                    <div className='h6 mb-0'>Goi mon thanh cong</div>
                    <div
                        style={{
                            maxWidth: '200px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}
                        className=''>Ban 5, 14:29, Chủ Nhật 24/03/2024</div>
                </div>
            </div>
            <div>
                <FontAwesomeIcon
                    icon={faChevronDown}></FontAwesomeIcon>
            </div>
        </div>
        <div className={`border ps-3 pe-4 ${styles.dropdown} ${openDetails ? styles.expand : styles.collapse}`}>
            <div className="py-1 d-flex align-items-center">
                <img className={`${styles.fitImg} me-3 rounded`} src="https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg" alt="error"></img>
                <div className="border-end pe-3 flex-fill">
                    <div
                        style={{
                            maxWidth: '112px'
                        }}
                        className="text-truncate h6 w-100">Com ga xoi mo</div>
                    <div
                        style={{
                            maxWidth: '112px'
                        }}
                        className="text-truncate"
                    >So luong x 3</div>
                </div>
                <div
                    style={{
                        maxWidth: '80px'
                    }}
                    className="text-truncate ms-3">100.000</div>
            </div>
            <div className="py-1 d-flex align-items-center">
                <img className={`${styles.fitImg} me-3 rounded`} src="https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg" alt="error"></img>
                <div className="border-end pe-3 flex-fill">
                    <div
                        style={{
                            maxWidth: '112px'
                        }}
                        className="text-truncate h6 w-100">Com ga xoi mo</div>
                    <div
                        style={{
                            maxWidth: '112px'
                        }}
                        className="text-truncate"
                    >So luong x 3</div>
                </div>
                <div
                    style={{
                        maxWidth: '80px'
                    }}
                    className="text-truncate ms-3">100.000</div>
            </div>
        </div>
    </div>
}

export default Notify