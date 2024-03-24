import styles from './Dish.module.scss'

function Dish() {
    return <div
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithDish"
        aria-controls="offcanvasWithDish"
        className="px-2 pb-4 col-6 col-sm-4 col-lg-3 col-xxl-2">
        <img className={`${styles.fitImg} rounded w-100 h-auto`} src="https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg" alt="error"></img>
        <div className='ps-1'>
            <div className={`${styles.menu_content_header} fw-normal pt-2 fw-bold`}>Com ga sot cay ngot</div>
            <div className={`${styles.menu_content_header} fw-normal`}>35,000</div>
        </div>

        <div className="offcanvas offcanvas-bottom" data-bs-scroll="true" id="offcanvasWithDish" aria-labelledby="offcanvasWithDishLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasWithDishLabel">Menu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className='px-3 d-flex flex-column overflow-auto pb-2'>
                <div className="rounded-pill border px-4 py-2 my-1">All</div>
                <div className="rounded-pill border px-4 py-2 my-1">dfsdfsdf</div>
                <div className="rounded-pill border px-4 py-2 my-1">dfsdfsdf</div>
                <div className="rounded-pill border px-4 py-2 my-1">dfsdfsdf</div>
                <div className="rounded-pill border px-4 py-2 my-1">dfsdfsdf</div>
                <div className="rounded-pill border px-4 py-2 my-1">dfsdfsdf</div>
                <div className="rounded-pill border px-4 py-2 my-1">dfsdfsdf</div>
            </div>
        </div>
    </div>
}

export default Dish