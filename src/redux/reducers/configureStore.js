import { createStore, applyMiddleware } from "redux"
import rootRedeucer from "./index"
import thunk from "redux-thunk"

export default function configureStore(){
    return createStore(rootRedeucer, applyMiddleware(thunk))
}