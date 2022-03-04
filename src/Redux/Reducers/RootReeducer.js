import { combineReducers } from "redux";
import userReducer from './userReducer.js'
import UserIdReducer from './UserIdReducer.js'
import postReducer from './postReducer.js'
import postIdReducer from './postIdReducer'
import commentReducer from './commentReducer'
import AddCommentReducer from './AddCommentReducer'

const RootReducer = combineReducers({
    userReducer,
    UserIdReducer,
    postReducer,
    postIdReducer,
    commentReducer,
    AddCommentReducer,
   
})

export default RootReducer