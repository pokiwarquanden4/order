import { useState } from "react"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SearchBox from "../../component/searchBox/SearchBox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './HomePages.module.scss'
import Dish from "../../component/dish/Dish"

function HomePage() {
    const [searchVal, setSearchVal] = useState<string>('')

    return <div className="">

        <div className="px-3 z-n1">
            <div className="h5 pb-1 fw-bolder">Com ga</div>
            <div className="row">
                <Dish></Dish>
                <Dish></Dish>
                <Dish></Dish>
            </div>
        </div>
    </div>
}

export default HomePage