import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
    _id: string,
    account: string,
    avatar: string,
    email: string,
    gender: boolean,
    googleLogin: boolean,
    name: string
}

const initialState: IUser = {
    _id: '',
    account: '',
    avatar: '',
    email: '',
    gender: false,
    googleLogin: false,
    name: '',
}


const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state._id = action.payload._id
            state.account = action.payload.account
            state.avatar = action.payload.avatar
            state.email = action.payload.email
            state.gender = action.payload.gender
            state.googleLogin = action.payload.googleLogin
            state.name = action.payload.name
        },
    },
    extraReducers: (builder) => {
        // builder.addCase(checkNotify.fulfilled, (state, action: any) => {
        //     const id = action.meta.arg.id
        //     const newData = (state.notify || []).map((item) => {
        //         if (item._id === id) {
        //             return {
        //                 ...item,
        //                 checked: true
        //             }
        //         }
        //         return item
        //     })

        //     state.notify = newData
        // })
    }
})

export const { setUser } = UserSlice.actions
export default UserSlice.reducer