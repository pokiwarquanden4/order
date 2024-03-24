import styles from './Dish.module.scss'

function Dish() {
    return <div
        className="px-2 pb-4 col-6 col-sm-4 col-lg-3 col-xxl-2">
        <div
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
        >
            <img className={`${styles.fitImg} rounded w-100 h-auto`} src="https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg" alt="error"></img>
            <div className='ps-1'>
                <div className={`${styles.menu_content_header} fw-normal pt-2 fw-bold`}>Com ga sot cay ngot</div>
                <div className={`${styles.menu_content_header} fw-normal`}>35,000</div>
            </div>
        </div>

        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Com ga</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img className={`${styles.fitImg} rounded w-100 h-auto pb-3`} src="https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg" alt="error"></img>
                        <div className='d-flex justify-content-between pb-3'>
                            <div className='text-truncate h5'>Com ga xoi mo</div>
                            <div className='fw-bolder h5'>35.000</div>
                        </div>
                        <div>
                            <div className='h6'>Loi nhan cho nhan vien</div>
                            <textarea
                                style={{
                                    border: 'none'
                                }}
                                className='border rounded w-100 p-3'
                                placeholder='Viet loi nhan cua ban'
                            ></textarea>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <div
                                style={{
                                    width: '30px',
                                    height: '30px'
                                }}
                                className="d-flex justify-content-center align-items-center border rounded-circle fw-bold h6 mb-0">-</div>
                            <div className="h5 mb-0 px-3">1</div>
                            <div
                                style={{
                                    width: '30px',
                                    height: '30px'
                                }}
                                className="d-flex justify-content-center align-items-center border rounded-circle fw-bold h6 mb-0">+</div>
                        </div>
                        <button type="button" className="btn btn-danger fw-bold" data-bs-dismiss="modal">Them - 20.000</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Dish