import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './homeSlice'
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = configureStore({
    reducer: {
        home: homeSlice
    },
});