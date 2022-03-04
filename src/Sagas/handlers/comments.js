import { call, put , select} from "redux-saga/effects";
import { setComments } from "../../Redux/actions"
import requestGetComments from '../requests/comments'

const postId = state => state.postIdReducer

export function* handleGetComments(){


    try{
        const pid = yield select(postId)
        const comments = yield call(requestGetComments , pid)
        yield put(setComments(comments))
       
    }catch (error){
        console.log(error)
    }
}