import {combineReducers} from "redux"
import { userReducer } from "./userReducer"
import { bagReducer } from "./bagReducer"
import { demandeReducer } from "./dmndReducer"
import {addtoReducer} from "./addtoReducer"
import {adminReducer} from "./adminReducer"
import {orderCreateReducer} from "./orderReducer"
import {topReducer} from "./topReducer"
export const rootReducer=combineReducers({userReducer,bagReducer,demandeReducer,addtoReducer,adminReducer,orderCreateReducer,topReducer})