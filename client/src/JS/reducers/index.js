import {combineReducers} from "redux"
import { userReducer } from "./userReducer"
import { bagReducer } from "./bagReducer"
import { demandeReducer } from "./dmndReducer"
import {addtoReducer} from "./addtoReducer"
export const rootReducer=combineReducers({userReducer,bagReducer,demandeReducer,addtoReducer})