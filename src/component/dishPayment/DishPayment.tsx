function DishPayment() {
    return <div className="border-bottom py-2">
        <div className="d-flex justify-content-between pb-2">
            <div className="text-truncate">Com ga xoi mo</div>
            <div>20.000</div>
        </div>
        <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
                <div
                    className="d-flex align-items-center pe-3"
                    style={{
                        color: 'red'
                    }}
                >Xoa</div>
                <div
                    className="d-flex align-items-center"
                    style={{
                        color: 'rgb(7,102,253)'
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#noteModal"
                >Ghi chu</div>
            </div>
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
        </div>

        <div className="modal fade" id="noteModal" aria-labelledby="noteModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="noteModalLabel">Loi nhan cho nhan vien</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <textarea
                            style={{
                                border: 'none'
                            }}
                            className='border rounded w-100 p-3'
                            placeholder='Viet loi nhan cua ban'
                        ></textarea>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger fw-bold" data-bs-dismiss="modal">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default DishPayment