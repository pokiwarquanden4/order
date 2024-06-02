import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../../app/axiosConfig";

export interface ICreateAccount {
    account: string,
    password: string,
    phoneNumber?: string
    name: string
    address?: string
    email: string
    gender: boolean,
    role: string
}

export const createAccount = createAsyncThunk<any, ICreateAccount>(
    "/create/account",
    async (payload, thunkApi) => {
        const res = await sendRequest(`users/create/account`, {
            thunkApi,
            payload: payload,
            method: "POST"
        })
        return res
    }
)