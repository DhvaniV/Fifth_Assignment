import * as actions from "../actions"
const initialState = {}

export default function AddCommentReducer(state = initialState , action) {

    switch (action.type) {
        case actions.SET_DETAILS :
             console.log('reducer details' , action.payload)
            return action.payload
            
        default:
            return state
    }
    
}