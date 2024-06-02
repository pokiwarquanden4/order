import { useEffect, useState } from "react"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SearchBox from "../../component/searchBox/SearchBox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './HomePages.module.scss'
import Dish from "../../component/dish/Dish"
import { useAppDispatch, useAppSelector } from "../../app/hook"
import { getMenu } from "./HomePageAPI"

export interface IDish {
    name: string,
    menu: string,
    recommend: boolean,
    description: string,
    price: number
}

function HomePage() {
    const dispatch = useAppDispatch()
    const selectedMenu = useAppSelector(store => store.menu.selectedMenu)
    const [searchVal, setSearchVal] = useState<string>('')
    const [dishList, setDishList] = useState<IDish[]>([])

    useEffect(() => {
        const getData = async () => {
            const res = await dispatch(getMenu(selectedMenu))

            if (res.payload.status === 200) {
                setDishList(res.payload.data.menus as IDish[])
            }
        }
        getData()
    }, [dispatch, selectedMenu])

    return <div className="">

        <div className="px-3 z-n1">
            <div className="h5 pb-1 fw-bolder">Com ga</div>
            <div className="row">
                <Dish></Dish>
                <Dish></Dish>
                <Dish></Dish>
                <Dish></Dish>
                <Dish></Dish>
                <Dish></Dish>
                <Dish></Dish>
            </div>
        </div>
    </div>
}

export default HomePage