import { DECRIMENT, INCRIMENT } from "./ActionType"

export const incriment=()=>{
    return{
        type:INCRIMENT,
    };
};

export const decriment=()=>{
    return{
        type:DECRIMENT,
    };
};