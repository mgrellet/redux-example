import {configureStore} from "@reduxjs/toolkit";
import {originSlice, otherSlice} from "./mySlices";

export default configureStore({
    reducer:{
        aValue: originSlice.reducer,
        otherValue: otherSlice.reducer
    }
})
