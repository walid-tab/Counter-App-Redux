import { DECRIMENT, INCRIMENT } from "./ActionType";

const initialState ={
    count:0,
    load:true,
};

export const countReducer=(state=initialState,action)=>{
    switch (action.type) {
        case INCRIMENT:
            return{
                ...state,count:state.count+1
            }
        case DECRIMENT :
            return{
                ...state,count:state.count>0? state.count-1:state.count,
            }
            
            
    
        default:
           return state;
    }

};

export default countReducer;