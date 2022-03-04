import * as actions from "../actions"
const initialState = []

export default function commentReducer(state = initialState , action) {

    switch (action.type) {
        case actions.SET_COMMENTS :
             console.log('reducer comment' , action.payload)
            return action.payload
            
        default:
            return state
    }
    
}