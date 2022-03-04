import { call, select } from "redux-saga/effects";
import addComment from '../requests/addcomment.js'

const userid = state => state.userIdReducer
const postid = state => state.postIdReducer
const commentdetail = state => state.AddCommentReducer

export function* handleAddComment(){
    try{
        console.log('handle called for comments')
        const uid = yield select(userid)
        const pid = yield select(postid)
        const cdetail = yield select(commentdetail)
        yield call(addComment, uid, pid, cdetail)
    }catch (error){
        console.log('handle'  , error)
    }
}