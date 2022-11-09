import { IState } from './type';
import {
    SET_ERROR,
    SET_GLOBAL_LOADING,
    SET_USER_INFO,
} from './constants'

const initialState: IState = {
    userInfo: null,
    error: null,
    globalLoading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ERROR:
            return { ...state, error: action.payload };
        case SET_GLOBAL_LOADING:
            return { ...state, globalLoading: action.payload }
        case SET_USER_INFO:
            return { ...state, userInfo: action.payload }
        default:
            return state;
    }
}