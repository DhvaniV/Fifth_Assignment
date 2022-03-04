import * as actions from '../Redux/actions'
import { all, takeLatest, fork } from "redux-saga/effects";
import { handleGetUser } from './handlers/users'
import { handleGetPosts } from './handlers/posts'
import { handleGetComments } from './handlers/comments';
import { handleAddComment } from './handlers/addComment'

function* getUserSaga() {
    yield takeLatest(actions.GET_USERS, handleGetUser)
}

function* getPostSaga() {
    console.log('called handle')
    yield takeLatest(actions.GET_POSTS, handleGetPosts)
}

function* getCommentSaga() {
    console.log('called handle')
    yield takeLatest(actions.GET_COMMENTS, handleGetComments)
}

function* getAddCommentSaga() {
    console.log('called handle')
    yield takeLatest(actions.ADD_COMMENT, handleAddComment)
}


export default function* watcherSaga() {
    yield all([
        fork(getUserSaga),
        fork(getPostSaga),
        fork(getCommentSaga),
        fork(getAddCommentSaga), 
    ])
}