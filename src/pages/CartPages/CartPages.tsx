import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faArrowLeft, faLocationDot, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import emptyCart from '../../img/empty-cart.svg'
import { useNavigate } from "react-router-dom"
import { routes } from ".."
import DishPayment from "../../component/dishPayment/DishPayment"

function CartPages() {
    const nav = useNavigate()

    return <div className="d-flex flex-column h-100">
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
        <div className="overflow-auto px-2 pb-3"
            style={{
                height: `calc(100vh - 112px)`
            }}
        >
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
                    <button type="button" className="btn btn-outline-primary"
                        onClick={() => {
                            nav(routes.home)
                        }}
                    >
                        <FontAwesomeIcon className="pe-1" icon={faPlus}></FontAwesomeIcon>
                        Them mon
                    </button>
                </div>
                {
                    true
                        ?
                        <div>
                            <DishPayment></DishPayment>
                            <DishPayment></DishPayment>
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