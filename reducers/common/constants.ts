import { getActionType } from '@/utils';

const getType = getActionType('COMMON');

export const SET_USER_INFO = getType('SET_USER_INFO');
export const SET_GLOBAL_LOADING = getType('SET_GLOBAL_LOADING');
export const SET_ERROR = getType('SET_ERROR');