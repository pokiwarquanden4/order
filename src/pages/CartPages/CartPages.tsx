import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faArrowLeft, faLocationDot, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import emptyCart from '../../img/empty-cart.svg'
import { useNavigate } from "react-router-dom"
import { routes } from ".."

function CartPages() {
    const nav = useNavigate()

    return <div className="">
        <div
            className="position-sticky d-flex align-items-center px-3 shadow-sm "
            style={{
                top: 0,
                height: '56px',
                backgroundColor: '#fff'
            }}
        >
            <FontAwesomeIcon
                className="me-4"
                style={{
                    fontSize: '25px'
                }}
                onClick={() => {
                    nav(routes.home)
                }}
                icon={faArrowLeft}></FontAwesomeIcon>
            <div
                style={{
                    fontSize: '22px'
                }}
            >Cart</div>
        </div>
        <div className="px-2 pb-3">
            <div className="mt-3 shadow rounded p-4">
                <div className="h5 pb-2">Thong tin nhan hang</div>
                <div className="d-flex align-items-center border-bottom pb-3">
                    <FontAwesomeIcon
                        className="pe-4"
                        style={{
                            color: 'red',
                            fontSize: '25px'
                        }}
                        icon={faLocationDot}></FontAwesomeIcon>
                    <div>
                        <div
                            className="h6">Nhan hang tai quan</div>
                        <div>Ban so 5</div>
                    </div>
                </div>
                <div className="d-flex align-items-center pt-3">
                    <FontAwesomeIcon
                        className="pe-3"
                        style={{
                            color: 'red',
                            fontSize: '25px'
                        }}
                        icon={faClock}></FontAwesomeIcon>
                    <div>
                        <div
                            className="h6">Thoi gian dat hang</div>
                        <div>14:29, Chủ Nhật 24/03/2024</div>
                    </div>
                </div>
            </div>
            <div className="mt-3 shadow rounded p-4">
                <div className="d-flex align-items-center justify-content-between pb-2">
                    <div className="h5 m-0">Mon da chon</div>
                    <button type="button" className="btn btn-outline-primary">
                        <FontAwesomeIcon className="pe-1" icon={faPlus}></FontAwesomeIcon>
                        Them mon
                    </button>
                </div>
                {
                    true
                        ?
                        <div>
                            <div className="border-bottom py-2">
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
                            </div>
                            <div className="border-bottom py-2">
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
                            </div>
                        </div>
                        :
                        <div className="d-flex align-items-center justify-content-center">
                            <img
                                className="w-75 h-75"
                                src={emptyCart} alt="Empty Cart"
                            />
                        </div>
                }
            </div>
            <div className="mt-3 shadow rounded p-4">
                <div className="h5 m-0 pb-2">Tong cong</div>
                <div>
                    <div className="d-flex justify-content-between border-bottom py-2">
                        <div className="text-truncate pe-4">Com ga chien xu</div>
                        <div>25.000</div>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-2">
                        <div className="text-truncate pe-4">Ga xao nam</div>
                        <div>35.000</div>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-2">
                        <div className="text-truncate pe-4">Tong</div>
                        <div className="fw-bold">60.000</div>
                    </div>
                </div>
            </div>
        </div>
        <div
            className="position-sticky d-flex justify-content-center py-2 border-top"
            style={{
                bottom: 0,
                height: '56px',
                backgroundColor: '#fff'
            }}
        >
            <button type="button" className="w-75 btn btn-danger">Dat Hang - 60.000</button>
        </div>
    </div>
}

export default CartPages