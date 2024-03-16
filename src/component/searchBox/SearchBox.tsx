import { Dispatch, SetStateAction } from 'react'

interface ISearchBar {
    searchVal: string
    setSearchVal: Dispatch<SetStateAction<string>>
}

function SearchBox(props: ISearchBar) {
    return <div className={`flex-fill`}>
        <div>
            <div className="">
                <input
                    type="search"
                    value={props.searchVal}
                    className="form-control border border-black"
                    placeholder="Search Here..."
                    aria-label="Search Here..."
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                        props.setSearchVal(e.target.value)
                    }}
                ></input>
            </div>
        </div>
    </div >
}

export default SearchBox