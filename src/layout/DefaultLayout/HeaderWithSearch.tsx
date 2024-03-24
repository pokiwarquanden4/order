import styles from './Header.module.scss'
import logo from '../../img/LogoApp.png'
import { allFlags } from '../../img/Flag/flag'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import SearchBox from '../../component/searchBox/SearchBox'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
                    <div className='d-flex align-items-center justify-content-center' style={{ height: '27px', width: '27px' }}>
                        {allFlags[selectedLanguage].img}
                    </div>
                    <div className='ps-4'>
                        <FontAwesomeIcon style={{ fontSize: '24px' }} icon={faBell}></FontAwesomeIcon>
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
    </div>
}

export default HeaderWithSearch