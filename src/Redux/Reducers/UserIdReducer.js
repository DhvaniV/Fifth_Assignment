import * as actions from "../actions"
const initialState = 0

export default function UserIdReducer(state = initialState , action) {

    switch (action.type) {
        case actions.SET_ID :
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
    
}