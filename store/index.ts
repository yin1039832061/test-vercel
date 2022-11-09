import { legacy_createStore as createStore } from 'redux';
import reducers from '@/reducers';
// import { configureStore, createSlice } from '@reduxjs/toolkit'

// 引入查看redux的工具插件
// eslint-disable-next-line no-undef
const { composeWithDevTools } = require('redux-devtools-extension');

export const initStore = (initialState = {}) => {
    return createStore(reducers, initialState, composeWithDevTools())
}

// const CommonModal = createSlice({
//     name: 'common',
//     initialState: {
//         userInfo: null,
//         globalLoading: false
//     },
//     reducers: {
//         setUserInfo: (state, action) => {
//             state.userInfo = action.payload
//         },
//         setGlobalLoading: (state, action) => {
//             state.globalLoading = action.payload
//         }
//     }
// })
// export const {
//     setGlobalLoading, setUserInfo
// } = CommonModal.actions
// export const initToolkitStore = () => {
//     return configureStore({
//         reducer: {
//             common: CommonModal.reducer,
//         },
//         middleware: [composeWithDevTools()]
//     });
// }