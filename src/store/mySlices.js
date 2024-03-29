import {createSlice} from "@reduxjs/toolkit";

export const originSlice = createSlice({
    name: 'aValue',
    initialState: {
        myName: 'Martin',
        libs: [{name: "react", date: 2013}, {name: "redux", date: 2015}]
    },
    reducers: {
        saveName: (state, action) => {
            state.myName = action.payload;
        },
        editArrayObj: (state, action) => {
            const {idx, newName, newDate} = action.payload
            state.libs[idx].name = newName;
            state.libs[idx].date = newDate;
        },
        addElement: (state, action) => {
            const {newName, newDate} = action.payload
            state.libs= [...state.libs, {name: newName, date: newDate}]
        },
        removeElement: (state, action) => {
            state.libs = state.libs.filter(value => value.name !== action.payload)
        }
    }
})

export const otherSlice = createSlice({
    name: 'otherValue',
    initialState: {counter: 0},
    reducers: {
        sum: (state) => {
            state.counter = state.counter + 1
        }
    }
})

export const {saveName} = originSlice.actions;
export const {sum} = otherSlice.actions;
export const {editArrayObj} = originSlice.actions;
export const {addElement} = originSlice.actions;
export const {removeElement} = originSlice.actions;

