import {CHANGE_DISPLAY , FILL_STORE} from '../actions/index'


const initialState={
   displayState:false,
   storedItems:[]       
}

const reducer = (state = initialState , action)=>{
    
    switch (action.type){
        case CHANGE_DISPLAY:
            if(state.displayState){
                return{
                    ...state,
                    displayState:false
                }
            }
            else{
                return{
                    ...state,
                    displayState:true
                }
            }
        case FILL_STORE:
            
            return{
                ...state,
                storedItems:action.payload
            }
        default: return state
    }

}
export default reducer;