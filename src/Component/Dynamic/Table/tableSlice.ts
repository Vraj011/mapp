import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { store } from "./store";

export interface Column{
    heading: string
    id: string
}

// export interface TextData {
//     [key: string]: string | number | React.ReactNode;
// }

export interface TextData {
  sn: number;
  brand_name: string;
  manufacture: string;
  desc: string;
  status: React.ReactNode;
  created: string;
  updated: string;
  action: React.ReactNode;
}


interface TableState {
    column: Column[], 
    dataTable: TextData[]
}

const initialState: TableState= {
    column: [],
    dataTable:[]
}

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers:{
        setColumn(state, action: PayloadAction<Column[]>){
            state.column = action.payload
        },
        setDataTable(state, action: PayloadAction<TextData[]>){
            //  state.dataTable = [...state, action.payload]
             state.dataTable =  action.payload
        },
           addRow(state, action: PayloadAction<TextData>) {
            state.dataTable.push(action.payload);
        },
        clearTable(state) {
            state.column = [];
            state.dataTable = [];
        },
    }

})

// https://redux.js.org/usage/usage-with-typescript
export type AppStore = typeof store
export type RootState  = ReturnType<AppStore['getState']>
// ----x----

export const {setColumn, setDataTable, addRow, clearTable} = tableSlice.actions

export default tableSlice.reducer