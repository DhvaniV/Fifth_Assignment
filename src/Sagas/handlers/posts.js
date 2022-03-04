import { call, put , select} from "redux-saga/effects";
import { setPosts } from "../../Redux/actions"
import requestGetPosts from '../requests/posts'

const userId = state => state.UserIdReducer

export function* handleGetPosts(){


    try{
        const id = yield select(userId)
        const posts = yield call(requestGetPosts , id)
        yield put(setPosts(posts))
       
    }catch (error){
        console.log(error)
    }
}