import * as actions from "../actions"
const initialState = []

export default function postReducer(state = initialState , action) {

    switch (action.type) {
        case actions.SET_POSTS :
             console.log('reducer' , action.payload)
            return action.payload
            
        default:
            return state
    }
    
}