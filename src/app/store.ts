import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import UserSlice from "../reducers/UserSlice";
import MenuSlice from "../reducers/MenuSlice";

export const store = configureStore({
    reducer: {
        user: UserSlice,
        menu: MenuSlice
    },
    // middleware: (getDefaultMiddleware) => {
    //     getDefaultMiddleware({
    //         serializableCheck: false
    //     })
    // }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>