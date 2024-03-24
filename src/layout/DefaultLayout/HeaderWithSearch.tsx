import styles from './Header.module.scss'
import logo from '../../img/LogoApp.png'
import { allFlags } from '../../img/Flag/flag'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons'
import SearchBox from '../../component/searchBox/SearchBox'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import LoginForm from '../../component/loginForm/LoginForm'
import Notify from '../../component/notify/Notify'

function HeaderWithSearch() {
    const [selectedLanguage, setSelectedLanguage] = useState<number>(0)
    const [searchVal, setSearchVal] = useState<string>('')

    return <div>
        <div className='position-sticky'
            style={{
                top: '0',
                backgroundColor: '#fff',
            }}
        >
            <div
                className={`z-1 shadow-sm d-flex align-items-center justify-content-between ${styles.container}`}
            >
                <div className='ps-2'>
                    <img alt='error' src={logo}></img>
                </div>
                <div className='pe-2 d-flex align-items-center'>
                    <div
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offCanvasFlags"
                        aria-controls="offCanvasFlags"
                        className='d-flex align-items-center justify-content-center' style={{ height: '27px', width: '27px' }}>
                        {allFlags[selectedLanguage].img}
                    </div>
                    <div
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offCanvasNotify"
                        aria-controls="offCanvasNotify"
                        className='ps-4'>
                        <FontAwesomeIcon style={{ fontSize: '24px' }} icon={faBell}></FontAwesomeIcon>
                    </div>
                    <div
                        className='ps-4'
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                    >
                        <FontAwesomeIcon style={{ fontSize: '22px' }} icon={faUser}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <div className="px-3 py-3">
                <div className="d-flex align-items-center">
                    <SearchBox
                        searchVal={searchVal}
                        setSearchVal={setSearchVal}
                    ></SearchBox>
                    <div data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                        <FontAwesomeIcon className="ps-3" icon={faBars}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>

        {/* Offcanvas of menu */}
        <div className="offcanvas offcanvas-bottom" data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Menu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className='px-3 d-flex flex-column overflow-auto pb-2'>
                <div className="rounded-pill border px-4 py-2 my-1">All</div>
                <div className="rounded-pill border px-4 py-2 my-1">Com ga</div>
                <div className="rounded-pill border px-4 py-2 my-1">Com ga</div>
                <div className="rounded-pill border px-4 py-2 my-1">Com ga</div>
                <div className="rounded-pill border px-4 py-2 my-1">Com ga</div>
                <div className="rounded-pill border px-4 py-2 my-1">Com ga</div>
                <div className="rounded-pill border px-4 py-2 my-1">Com ga</div>
            </div>
        </div>
        {/* Login */}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <LoginForm></LoginForm>
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                        <div
                            style={{
                                color: 'rgb(7,102,253)'
                            }}
                        >Tao Tai Khoan</div>
                        <button type="button" className="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div>
        {/* OFF canvas of language */}
        <div className="offcanvas offcanvas-bottom" data-bs-scroll="true" id="offCanvasFlags" aria-labelledby="offCanvasFlagsLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offCanvasFlagsLabel">Ngon ngu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className='px-3 d-flex flex-column overflow-auto pb-2'>
                <div className="rounded-pill border px-4 py-2 my-1">Viet Name</div>
                <div className="rounded-pill border px-4 py-2 my-1">USA</div>
                <div className="rounded-pill border px-4 py-2 my-1">Chinese</div>
            </div>
        </div>
        {/* OFF canvas of notify */}
        <div className="offcanvas h-75 offcanvas-bottom" data-bs-scroll="true" id="offCanvasNotify" aria-labelledby="offCanvasNotifyLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offCanvasNotifyLabel">Thong bao</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className='px-3 d-flex flex-column overflow-auto pb-2'>
                <Notify></Notify>
                <Notify></Notify>
            </div>
        </div>
    </div>
}

export default HeaderWithSearch