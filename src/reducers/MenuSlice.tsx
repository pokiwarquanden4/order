import { createSlice } from "@reduxjs/toolkit";

export interface IMenu {
    menuNames: string[]
    selectedMenu: string
}

const initialState: IMenu = {
    menuNames: [],
    selectedMenu: 'all'
}


const MenuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenu: (state, action) => {
            state.menuNames = action.payload
        },
        setSelectedMenu: (state, action) => {
            state.selectedMenu = action.payload
        },
    },
    extraReducers: (builder) => {

    }
})

export const { setMenu, setSelectedMenu } = MenuSlice.actions
export default MenuSlice.reducer