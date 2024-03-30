import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faChevronRight, faCircleExclamation, faFont, faRightFromBracket, faTableList } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './AccountPages.module.scss'
import { useNavigate } from "react-router-dom"
import { routes } from ".."
import { googleLogout } from "@react-oauth/google"

function AccountPages() {
    const nav = useNavigate()

    return <div className="px-3 py-4">
        <div className="d-flex align-items-center pb-4">
            <img className={`${styles.fitImg} me-3`} src="https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg" alt="error"></img>
            <div className="h4">Tran Minh Quang</div>
        </div>
        <div
            data-bs-toggle="offcanvas"
            data-bs-target="#offCanvasNotify"
            aria-controls="offCanvasNotify"
            className="border rounded shadow-sm px-2 py-3 d-flex align-items-center justify-content-between">
            <div
                className="d-flex align-items-center">
                <FontAwesomeIcon
                    style={{
                        width: '50px',
                        fontSize: '20px'
                    }}
                    icon={faTableList}></FontAwesomeIcon>
                <div className="ps-2 h5 mb-0">Lich su don hang</div>
            </div>
            <FontAwesomeIcon className="pe-2" icon={faChevronRight}></FontAwesomeIcon>
        </div>
        <div
            onClick={() => {
                nav(routes.accountDetails)
            }}
            className="mt-3 border rounded shadow-sm px-2 py-3 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <FontAwesomeIcon
                    style={{
                        width: '50px',
                        fontSize: '20px'
                    }}
                    icon={faUser}></FontAwesomeIcon>
                <div className="ps-2 h5 mb-0">Thong tin tai khoan</div>
            </div>
            <FontAwesomeIcon className="pe-2" icon={faChevronRight}></FontAwesomeIcon>
        </div>
        <div
            data-bs-toggle="offcanvas"
            data-bs-target="#offCanvasFlags"
            aria-controls="offCanvasFlags"
            className="mt-3 border rounded shadow-sm px-2 py-3 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <FontAwesomeIcon
                    style={{
                        width: '50px',
                        fontSize: '20px'
                    }}
                    icon={faFont}></FontAwesomeIcon>
                <div className="ps-2 h5 mb-0">Ngon ngu</div>
            </div>
            <FontAwesomeIcon className="pe-2" icon={faChevronRight}></FontAwesomeIcon>
        </div>
        <div className="mt-3 border rounded shadow-sm px-2 py-3 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <FontAwesomeIcon
                    style={{
                        width: '50px',
                        fontSize: '20px'
                    }}
                    icon={faCircleExclamation}></FontAwesomeIcon>
                <div className="ps-2 h5 mb-0">Ve chung toi</div>
            </div>
            <FontAwesomeIcon className="pe-2" icon={faChevronRight}></FontAwesomeIcon>
        </div>
        <div
            onClick={googleLogout}
            className="mt-3 border rounded shadow-sm px-2 py-3 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <FontAwesomeIcon
                    style={{
                        width: '50px',
                        fontSize: '20px'
                    }}
                    icon={faRightFromBracket}></FontAwesomeIcon>
                <div className="ps-2 h5 mb-0">Dang xuat</div>
            </div>
            <FontAwesomeIcon className="pe-2" icon={faChevronRight}></FontAwesomeIcon>
        </div>
    </div>
}

export default AccountPages