import { useState } from "react"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SearchBox from "../../component/searchBox/SearchBox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './HomePages.module.scss'

function HomePage() {
    const [searchVal, setSearchVal] = useState<string>('')

    return <div className="">
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
        <div className="px-3 z-n1">
            <div className="h5 pb-1 fw-bolder">Com ga</div>
            <div className="row">
                <div className="px-2 pb-4 col-6 col-sm-4 col-lg-3 col-xxl-2">
                    <img className={`${styles.fitImg} rounded w-100 h-auto`} src="https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg" alt="error"></img>
                    <div className='ps-1'>
                        <div className={`${styles.menu_content_header} fw-normal pt-2 fw-bold`}>Com ga sot cay ngot</div>
                        <div className={`${styles.menu_content_header} fw-normal`}>35,000</div>
                    </div>
                </div>
                <div className="px-2 pb-4 col-6 col-sm-4 col-lg-3 col-xxl-2">
                    <img className={`${styles.fitImg} rounded w-100 h-auto`} src="https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg" alt="error"></img>
                    <div className='ps-1'>
                        <div className={`${styles.menu_content_header} fw-normal pt-2 fw-bold`}>Com ga sot cay ngot</div>
                        <div className={`${styles.menu_content_header} fw-normal`}>35,000</div>
                    </div>
                </div>
                <div className="px-2 pb-4 col-6 col-sm-4 col-lg-3 col-xxl-2">
                    <img className={`${styles.fitImg} rounded w-100 h-auto`} src="https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg" alt="error"></img>
                    <div className='ps-1'>
                        <div className={`${styles.menu_content_header} fw-normal pt-2 fw-bold`}>Com ga sot cay ngot</div>
                        <div className={`${styles.menu_content_header} fw-normal`}>35,000</div>
                    </div>
                </div>
                <div className="px-2 pb-4 col-6 col-sm-4 col-lg-3 col-xxl-2">
                    <img className={`${styles.fitImg} rounded w-100 h-auto`} src="https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg" alt="error"></img>
                    <div className='ps-1'>
                        <div className={`${styles.menu_content_header} fw-normal pt-2 fw-bold`}>Com ga sot cay ngot</div>
                        <div className={`${styles.menu_content_header} fw-normal`}>35,000</div>
                    </div>
                </div>
                <div className="px-2 pb-4 col-6 col-sm-4 col-lg-3 col-xxl-2">
                    <img className={`${styles.fitImg} rounded w-100 h-auto`} src="https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg" alt="error"></img>
                    <div className='ps-1'>
                        <div className={`${styles.menu_content_header} fw-normal pt-2 fw-bold`}>Com ga sot cay ngot</div>
                        <div className={`${styles.menu_content_header} fw-normal`}>35,000</div>
                    </div>
                </div>
                <div className="px-2 pb-4 col-6 col-sm-4 col-lg-3 col-xxl-2">
                    <img className={`${styles.fitImg} rounded w-100 h-auto`} src="https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg" alt="error"></img>
                    <div className='ps-1'>
                        <div className={`${styles.menu_content_header} fw-normal pt-2 fw-bold`}>Com ga sot cay ngot</div>
                        <div className={`${styles.menu_content_header} fw-normal`}>35,000</div>
                    </div>
                </div>
                <div className="px-2 pb-4 col-6 col-sm-4 col-lg-3 col-xxl-2">
                    <img className={`${styles.fitImg} rounded w-100 h-auto`} src="https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg" alt="error"></img>
                    <div className='ps-1'>
                        <div className={`${styles.menu_content_header} fw-normal pt-2 fw-bold`}>Com ga sot cay ngot</div>
                        <div className={`${styles.menu_content_header} fw-normal`}>35,000</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default HomePage