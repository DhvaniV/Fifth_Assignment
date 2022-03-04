import { call, put } from "redux-saga/effects";
import { setUsers } from "../../Redux/actions"
import requestGetUsers from '../requests/users'

export function* handleGetUser(){


    try{
        const users = yield call(requestGetUsers)
        yield put(setUsers(users))
        // console.log(users)
    }catch (error){
        console.log(error)
    }
}