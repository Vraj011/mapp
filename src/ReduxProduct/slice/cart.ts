import { createSlice } from '@reduxjs/toolkit'
import type { store } from '../store'

const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        addItem: (state: any, action) => {
            // state = [...state, action.payload]
            state.push(action.payload)

        }
    }
})
export const { addItem } = cartSlice.actions

// https://redux.js.org/usage/usage-with-typescript 
export type AppStore = typeof store
export type RootState  = ReturnType<AppStore['getState']>
// ---x---

export default cartSlice.reducer