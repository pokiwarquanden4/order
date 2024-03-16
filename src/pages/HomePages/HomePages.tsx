import { useState } from "react"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SearchBox from "../../component/searchBox/SearchBox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function HomePage() {
    const [searchVal, setSearchVal] = useState<string>('')

    return <div className="">
        <div className="px-3 py-3 d-flex align-items-center">
            <SearchBox
                searchVal={searchVal}
                setSearchVal={setSearchVal}
            ></SearchBox>
            <FontAwesomeIcon className="ps-3" icon={faBars}></FontAwesomeIcon>
        </div>
    </div>
}

export default HomePage