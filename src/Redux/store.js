import createSagaMiddleware from '@redux-saga/core'
import { applyMiddleware , createStore } from "redux"
import RootReducer from './Reducers/RootReeducer'
import watcherSaga from '../Sagas/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(RootReducer , applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watcherSaga)

export default store