import { createAsyncThunk } from "@reduxjs/toolkit"
import { sendRequest } from "../../app/axiosConfig"

export const getMenu = createAsyncThunk<any, string>(
    "get/menu",
    async (payload, thunkApi) => {
        const res = await sendRequest(`dish/getDish?name=${payload}`, {
            thunkApi,
            method: "GET"
        })
        return res
    }
)

export const getMenuNames = createAsyncThunk<any, {}>(
    "get/menu/name",
    async (payload, thunkApi) => {
        const res = await sendRequest(`dish/menu`, {
            thunkApi,
            method: "GET"
        })
        return res
    }
)