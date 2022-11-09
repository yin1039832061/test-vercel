import getConfig from 'next/config';
const { publicRuntimeConfig, } = getConfig();


export const config = publicRuntimeConfig;

export const getActionType=(module:string)=>{
    return function getType(actionType:string){
        return `${module}_${actionType}`
    }
}